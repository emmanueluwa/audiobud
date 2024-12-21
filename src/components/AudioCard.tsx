import Image from "next/image";
import React from "react";
import { Card, CardContent } from "./ui/card";

const AudioCard = ({
  imgUrl,
  title,
  description,
  audioId,
}: {
  imgUrl: string;
  title: string;
  description: string;
  audioId: number;
}) => {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg cursor-pointer border-none">
      <CardContent className="">
        <figure className="flex flex-col gap-2">
          <div className="relative aspect-square w-full ">
            <Image
              src={imgUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105 rounded-lg 2xl:size-[200px]"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
            <h2 className="text-12 truncate font-normal capitalize text-white-4">
              {description}
            </h2>
          </div>
        </figure>
      </CardContent>
    </Card>
  );
};

export default AudioCard;
