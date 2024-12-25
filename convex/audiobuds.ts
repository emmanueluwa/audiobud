import { v } from "convex/values";
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
