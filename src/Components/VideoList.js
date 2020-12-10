import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const renderLists = props.videoLists.map((item) => {
    return <VideoItem video={item} />;
  });

  return (
    <div className="ui relaxed divided list">
      {props.videoLists.length}
      <p>{renderLists}</p>
    </div>
  );
};

export default VideoList;
