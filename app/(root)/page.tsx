"use client";
import AudioCard from "../../src/components/AudioCard";
import { audioData } from "../../src/constants";
import React from "react";
import { api } from "@/../convex/_generated/api";

import { useQuery } from "convex/react";

const Home = () => {
  const tasks = useQuery(api.tasks.get);
  console.log(tasks);

  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Audiobuds</h1>

        <div className="flex min-h-screen flex-col items-center justify-between p-24 text-white-1">
          {tasks?.map(({ _id, text }) => <div key={_id}>{text} hello</div>)}
        </div>

        <div className="audio_grid">
          {audioData.map(({ id, description, imgUrl, title }) => (
            <AudioCard
              key={id}
              imgUrl={imgUrl}
              title={title}
              description={description}
              audioId={id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
