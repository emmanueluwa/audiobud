"use client";

import { Headphones } from "lucide-react";
import React from "react";
import { api } from "../../../../../convex/_generated/api";
import { useQuery } from "convex/react";
import { Id } from "../../../../../convex/_generated/dataModel";
import AudibudDetailPlayer from "@/components/AudibudDetailPlayer";
import LoaderSpinner from "@/components/LoaderSpinner";
import AudioCard from "@/components/AudioCard";
import EmptyState from "@/components/EmptyState";

const AudiobudDetails = ({
  params: { audiobudId },
}: {
  params: { audiobudId: Id<"audiobuds"> };
}) => {
  const audiobud = useQuery(api.audiobuds.getAudiobudById, {
    audiobudId,
  });

  const similarAudiobuds = useQuery(api.audiobuds.getAudiobudByVoiceType, {
    audiobudId,
  });
  if (!similarAudiobuds || !audiobud) {
    return <LoaderSpinner />;
  }

  return (
    <section className="flex w-full flex-col">
      <header className="mt-9 flex items-center justify-between">
        <h1 className="text-20 font-bold text-white-1">Currently playing</h1>
        <figure className="flex gap-3">
          <Headphones
            color="#f5f0f0"
            width={24}
            height={24}
            aria-details="headphones"
          />
          <h2 className="text-16 font-bold text-white-1">
            {audiobud?.listens}
          </h2>
        </figure>
      </header>

      <AudibudDetailPlayer />

      <p className="text-white-2 text-16 pb-8 pt-[45px] font-medium max-md:text-center">
        {audiobud?.audiobudDescription}
      </p>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-18 font-bold text-white-1">Transcription</h1>
          <p className="text-16 font-medium text-white-2">
            {audiobud?.voicePrompt}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-18 font-bold text-white-1">Thumbnail Prompt</h1>
          <p className="text-16 font-medium text-white-2">
            {audiobud?.imagePrompt}
          </p>
        </div>
      </div>

      <section className="mt-8 flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Similar Audiobuds</h1>

        {similarAudiobuds && similarAudiobuds.length > 0 ? (
          <div className="audio_grid">
            {similarAudiobuds?.map(
              ({ _id, imageUrl, audiobudTitle, audiobudDescription }) => (
                <AudioCard
                  key={_id}
                  imgUrl={imageUrl!}
                  title={audiobudTitle}
                  description={audiobudDescription}
                  audiobudId={_id}
                />
              )
            )}
          </div>
        ) : (
          <>
            <EmptyState
              title="No similar audiobuds found 😢"
              buttonLink="/discover"
              buttonText="Discover more audiobuds"
            />
          </>
        )}
      </section>
    </section>
  );
};

export default AudiobudDetails;
