import React from "react";

const AudioDetails = ({ params }: { params: { audioId: string } }) => {
  return <div className="text-white-1">AudioDetails for {params.audioId}</div>;
};

export default AudioDetails;
