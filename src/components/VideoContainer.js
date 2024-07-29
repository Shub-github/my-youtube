import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";
// console.log(YOUTUBE_VIDEO_API);
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await data.json();
    console.log(jsonData.items);
    setVideos(jsonData.items);
  };

  return (
    <div className="flex flex-wrap">
      {/* <h1>VideoContainer</h1> */}
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCards key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
