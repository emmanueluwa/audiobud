import { AudiobudCardProps } from "@/app/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const AudioCard = ({
  imgUrl,
  title,
  description,
  audiobudId,
}: AudiobudCardProps) => {
  const router = useRouter();

  const handleListens = () => {
    //increase listens

    router.push(`/audiobuds/${audiobudId}`, {
      scroll: true,
    });
  };

  return (
    <div className="cursor-pointer" onClick={handleListens}>
      <figure className="flex flex-col gap-2">
        <Image
          src={imgUrl}
          width={174}
          height={174}
          alt={title}
          className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
        />
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
          <h2 className="text-12 truncate font-normal capitalize text-white-4">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default AudioCard;
