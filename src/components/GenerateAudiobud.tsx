import { GenerateAudiobudProps } from "@/app/types";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Loader } from "lucide-react";
import { useAction, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { v4 as uuidv4 } from "uuid";
import { useUploadFiles } from "@xixixao/uploadstuff/react";
import { useToast } from "@/hooks/use-toast";

const useGenerateAudiobud = ({
  setAudio,
  voiceType,
  voicePrompt,
  setAudioStorageId,
}: GenerateAudiobudProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const { startUpload } = useUploadFiles(generateUploadUrl);

  const getAudiobudAudio = useAction(api.openai.generateAudioAction);

  const getAudioUrl = useMutation(api.audiobuds.getUrl);

  //logic generating audiobud with ai api
  const generateAudiobud = async () => {
    setIsGenerating(true);
    setAudio("");

    if (!voicePrompt) {
      toast({
        title: "Please provide a file",
      });
      return setIsGenerating(false);
    }

    if (!voiceType) {
      toast({
        title: "Please select a voice",
      });
      return setIsGenerating(false);
    }

    try {
      const response = await getAudiobudAudio({
        voice: voiceType,
        input: voicePrompt,
      });

      const blob = new Blob([response], { type: "audio/mpeg" });
      const fileName = `podcast-${uuidv4()}.mp3`;
      const file = new File([blob], fileName, { type: "audio/mpeg" });

      const uploaded = await startUpload([file]);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const storageId = (uploaded[0].response as any).storageId;

      setAudioStorageId(storageId);

      const audioUrl = await getAudioUrl({ storageId });
      setAudio(audioUrl!);
      setIsGenerating(false);

      //   todo: success message
      toast({
        title: "Successfully created audibud",
      });
    } catch (error) {
      console.log("Error generating audiobud", error);
      toast({
        title: "Error creating audiobud",
        variant: "destructive",
      });
      setIsGenerating(false);
    }
  };

  return {
    isGenerating,
    generateAudiobud,
  };
};

const GenerateAudiobud = (props: GenerateAudiobudProps) => {
  const { generateAudiobud, isGenerating } = useGenerateAudiobud(props);

  return (
    <div>
      <div className="flex flex-col gap-2.5">
        <Label className="text-16 font-bold text-white-1">
          Generate Audiobud
        </Label>
        <Textarea
          className="input-class font-light focus-visible:ring-offset-red-1"
          placeholder="Provide text to generate audio"
          rows={5}
          value={props.voicePrompt}
          onChange={(e) => props.setVoicePrompt(e.target.value)}
        />
      </div>

      <div className="mt-5 w-full max-w-[200px]">
        <Button
          onClick={generateAudiobud}
          type="submit"
          className="text-16 bg-red-1 py-4 font-bold text-white-1"
        >
          {isGenerating ? (
            <>
              Generating
              <Loader size={20} className="animate-spin ml-2" />
            </>
          ) : (
            "Generate"
          )}
        </Button>
      </div>
      {props.audio && (
        <audio
          controls
          src={props.audio}
          autoPlay
          className="mt-5"
          onLoadedMetadata={(e) =>
            props.setAudioDuration(e.currentTarget.duration)
          }
        />
      )}
    </div>
  );
};

export default GenerateAudiobud;
