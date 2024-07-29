import React from "react";

const VideoCards = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { commentCount, likeCount, viewCount } = statistics;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCards;
