import { AudiobudDetailPlayerProps } from "@/app/types";
import { EllipsisVertical, Play, Trash2, UserRound } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useToast } from "@/hooks/use-toast";
import LoaderSpinner from "./LoaderSpinner";

const AudibudDetailPlayer = ({
  imageUrl,
  audiobudTitle,
  authorId,
  // author,
  isOwner,
  audiobudId,
  imageStorageId,
  audioStorageId,
}: AudiobudDetailPlayerProps) => {
  const router = useRouter();
  const { toast } = useToast();

  const [isDeleting, setIsDeleting] = useState(false);

  // const { setAudio } = useAudio();

  const deleteAudiobud = useMutation(api.audiobuds.deleteAudiobud);

  const handlePlay = () => {
    // setAudio({
    //   title: audiobudTitle,
    //   audioUrl,
    //   imageUrl,
    //   // author,
    //   audiobudId,
    // });
  };

  const handleDelete = async () => {
    try {
      await deleteAudiobud({ audiobudId, imageStorageId, audioStorageId });

      toast({
        title: "Audiobud deleted",
      });
      router.push("/");
    } catch (error) {
      console.error("Error deleting audibud", error);
      toast({
        title: "Error deleting audibud",
        variant: "destructive",
      });
    }
  };

  if (!imageUrl) return <LoaderSpinner />;

  return (
    <div className="mt-6 flex w-full justify-between max-md:justify-center">
      <div className="flex flex-col gap-8 max-md:items-center md:flex-row">
        <Image
          src={imageUrl}
          width={250}
          height={250}
          alt="audiobud image"
          className="aspect-square rounded-2xl"
        />
        <div className="flex w-full flex-col gap-5 max-md:items-center md:gap-9">
          <article className="flex flex-col gap-2 max-md:items-center">
            <h1 className="text-32 font-extrabold tracking-[-0.32px] text-white-1">
              {audiobudTitle}
            </h1>
            <figure
              onClick={() => {
                router.push(`/profile/${authorId}`);
              }}
              className="flex cursor-pointer items-center gap-2"
            >
              <UserRound size={32} color="#d12e2e" />
              <h2 className="text-16 font-normal text-white-3">human</h2>
            </figure>
          </article>

          <Button
            onClick={handlePlay}
            className="text-16 w-full max-w-[250px] bg-red-1 font-extrabold text-white-1"
          >
            <Play size={20} color="#f5f0f0" /> &nbsp; Play audiobud
          </Button>
        </div>
      </div>
      {isOwner && (
        <div className="relative mt-2">
          <EllipsisVertical
            size={32}
            color="#f5f0f0"
            aria-label="extra options"
            className="cursor-pointer"
            onClick={() => setIsDeleting((prev) => !prev)}
          />
          {isDeleting && (
            <div
              className="absolute -left-32 -top-2 z-10 flex w-32 cursor-pointer justify-center gap-2 rounded-md bg-black-6 py-1.5 hover:bg-black-2"
              onClick={handleDelete}
            >
              <Trash2 size={20} color="#f5f0f0" />
              <h2 className="text-16 font-normal text-white-1">Delete</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AudibudDetailPlayer;
