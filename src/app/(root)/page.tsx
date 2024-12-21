import AudioCard from "@/components/AudioCard";
import { audioData } from "@/constants";
import React from "react";

const Home = () => {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Audiobuds</h1>
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
