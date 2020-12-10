import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const renderLists = props.videoLists.map((item) => {
    return (
      <VideoItem video={item} onvideoSelect={props.onhandleSelectdVideo} />
    );
  });

  return (
    <div className="ui relaxed divided list">
      <p>{renderLists}</p>
    </div>
  );
};

export default VideoList;
