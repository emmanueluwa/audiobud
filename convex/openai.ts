import { VoiceOption } from "@/app/types";
import { v } from "convex/values";
import OpenAI from "openai";
import { action } from "./_generated/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateAudioAction = action({
  args: { input: v.string(), voice: v.string() },
  handler: async (_, { voice, input }) => {
    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: voice as VoiceOption,
      input,
    });

    const buffer = await mp3.arrayBuffer();

    return buffer;
  },
});
