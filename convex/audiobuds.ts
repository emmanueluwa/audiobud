import { ConvexError, v } from "convex/values";
import { mutation } from "./_generated/server";

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
