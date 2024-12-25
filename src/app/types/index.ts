/* eslint-disable no-unused-vars */

import { Dispatch, SetStateAction } from "react";

import { Id } from "@/../convex/_generated/dataModel";

export type VoiceOption =
  | "alloy"
  | "shimmer"
  | "nova"
  | "echo"
  | "fable"
  | "onyx";

export interface EmptyStateProps {
  title: string;
  search?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

export interface TopAudiobudsProps {
  _id: Id<"users">;
  _creationTime: number;
  email: string;
  clerkId: string;
  audiobud: {
    audiobudTitle: string;
    audiobudId: Id<"audiobuds">;
  }[];
  totalAudiobuds: number;
}

export interface AudiobudProps {
  _id: Id<"audiobuds">;
  _creationTime: number;
  audioStorageId: Id<"_storage"> | null;
  user: Id<"users">;
  audiobudTitle: string;
  audiobudDescription: string;
  audioUrl: string | null;
  imageUrl: string | null;
  imageStorageId: Id<"_storage"> | null;
  author: string;
  authorId: string;
  voicePrompt: string;
  imagePrompt: string | null;
  voiceType: string;
  audioDuration: number;
  views: number;
}

export interface ProfileAudiobudProps {
  audiobuds: AudiobudProps[];
  listeners: number;
}

export interface GenerateAudiobudProps {
  voiceType: string;
  setAudio: Dispatch<SetStateAction<string>>;
  audio: string;
  setAudioStorageId: Dispatch<SetStateAction<Id<"_storage"> | null>>;
  voicePrompt: string;
  setVoicePrompt: Dispatch<SetStateAction<string>>;
  setAudioDuration: Dispatch<SetStateAction<number>>;
}

export interface GenerateThumbnailProps {
  setImage: Dispatch<SetStateAction<string>>;
  setImageStorageId: Dispatch<SetStateAction<Id<"_storage"> | null>>;
  image: string;
  imagePrompt: string;
  setImagePrompt: Dispatch<SetStateAction<string>>;
}

export interface LatestAudiobudCardProps {
  imgUrl: string;
  title: string;
  duration: string;
  index: number;
  audioUrl: string;
  author: string;
  views: number;
  audiobudId: Id<"audiobuds">;
}

export interface AudiobudDetailPlayerProps {
  audioUrl: string;
  audiobudTitle: string;
  author: string;
  isOwner: boolean;
  imageUrl: string;
  audiobudId: Id<"audiobuds">;
  imageStorageId: Id<"_storage">;
  audioStorageId: Id<"_storage">;
  authorId: string;
}

export interface AudioProps {
  title: string;
  audioUrl: string;
  author: string;
  imageUrl: string;
  audiobudId: string;
}

export interface AudioContextType {
  audio: AudioProps | undefined;
  setAudio: React.Dispatch<React.SetStateAction<AudioProps | undefined>>;
}

export interface AudiobudCardProps {
  imgUrl: string;
  title: string;
  description: string;
  audiobudId: Id<"audiobuds">;
}

export interface CarouselProps {
  fansLikeDetail: TopAudiobudsProps[];
}

export interface ProfileCardProps {
  audiobudData: ProfileAudiobudProps;
  imageUrl: string;
  userFirstName: string;
}

export type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};
