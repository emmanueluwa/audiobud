import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

//return url of storage file accessed by id
export const getUrl = mutation({
  args: {
    storageId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});

export const createAudiobud = mutation({
  args: {
    audiobudTitle: v.string(),
    audiobudDescription: v.string(),
    audioUrl: v.string(),
    imageUrl: v.string(),
    voiceType: v.string(),
    imagePrompt: v.string(),
    voicePrompt: v.string(),
    listens: v.number(),
    audioDuration: v.number(),
    audioStorageId: v.id("_storage"),
    imageStorageId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new ConvexError("Not authenticated");
    }

    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), identity.email))
      .collect();

    if (user.length === 0) {
      throw new ConvexError("User not found");
    }

    const audiobud = await ctx.db.insert("audiobuds", {
      ...args,
      user: user[0]._id,
      author: user[0].email,
      authorId: user[0].clerkId,
    });

    return audiobud;
  },
});

export const getTrendingAudiobuds = query({
  handler: async (ctx) => {
    const audiobuds = await ctx.db.query("audiobuds").collect();

    return audiobuds;
  },
});

export const getAudiobudById = query({
  args: { audiobudId: v.id("audiobuds") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.audiobudId);
  },
});

export const getAudiobudByVoiceType = query({
  args: {
    audiobudId: v.id("audiobuds"),
  },
  handler: async (ctx, args) => {
    const audiobud = await ctx.db.get(args.audiobudId);

    return await ctx.db
      .query("audiobuds")
      .filter((q) =>
        q.and(
          q.eq(q.field("voiceType"), audiobud?.voiceType),
          q.neq(q.field("_id"), args.audiobudId)
        )
      )
      .collect();
  },
});

export const getPodcastByAuthorId = query({
  args: {
    authorId: v.string(),
  },
  handler: async (ctx, args) => {
    const audiobuds = await ctx.db
      .query("audiobuds")
      .filter((q) => q.eq(q.field("authorId"), args.authorId))
      .collect();

    const totalListeners = audiobuds.reduce(
      (sum, audiobud) => sum + audiobud.listens,
      0
    );

    return { audiobuds, listeners: totalListeners };
  },
});

export const getAudiobudBySearch = query({
  args: {
    search: v.string(),
  },
  handler: async (ctx, args) => {
    if (args.search === "") {
      return await ctx.db.query("audiobuds").order("desc").collect();
    }

    const authorSearch = await ctx.db
      .query("audiobuds")
      .withSearchIndex("search_author", (q) => q.search("author", args.search))
      .take(10);

    if (authorSearch.length > 0) {
      return authorSearch;
    }

    const titleSearch = await ctx.db
      .query("audiobuds")
      .withSearchIndex("search_title", (q) =>
        q.search("audiobudTitle", args.search)
      )
      .take(10);

    if (titleSearch.length > 0) {
      return titleSearch;
    }

    return await ctx.db
      .query("audiobuds")
      .withSearchIndex("search_body", (q) =>
        q.search("audiobudDescription" || "audiobudTitle", args.search)
      )
      .take(10);
  },
});

export const updateAudiobudListens = mutation({
  args: {
    audiobudId: v.id("audiobuds"),
  },
  handler: async (ctx, args) => {
    const audiobud = await ctx.db.get(args.audiobudId);

    if (!audiobud) {
      throw new ConvexError("Audiobud not found");
    }

    return await ctx.db.patch(args.audiobudId, {
      listens: audiobud.listens + 1,
    });
  },
});

export const deleteAudiobud = mutation({
  args: {
    audiobudId: v.id("audiobuds"),
    imageStorageId: v.id("_storage"),
    audioStorageId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    const audiobud = await ctx.db.get(args.audiobudId);

    if (!audiobud) {
      throw new ConvexError("Audibud not found");
    }

    await ctx.storage.delete(args.imageStorageId);
    await ctx.storage.delete(args.audioStorageId);
    return await ctx.db.delete(args.audiobudId);
  },
});
