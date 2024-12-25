"use client";
import AudioCard from "../../components/AudioCard";
import { audioData } from "../../constants";
import React from "react";
import { api } from "@/../convex/_generated/api";

import { useQuery } from "convex/react";

const Home = () => {
  const trendingAudiobuds = useQuery(api.audiobuds.getTrendingAudiobuds);

  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Audiobuds</h1>
        <div className="audio_grid">
          {trendingAudiobuds?.map(
            ({ _id, imageUrl, audiobudTitle, audiobudDescription }) => (
              <AudioCard
                key={_id}
                imgUrl={imageUrl}
                title={audiobudTitle}
                description={audiobudDescription}
                audioId={_id}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
