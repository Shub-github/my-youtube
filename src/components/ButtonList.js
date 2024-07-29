import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "Game",
    "cooking",
    "sport",
    "News",
    "live",
    "Shorts",
    "Live News",
    "Movie",
    "Anime",
  ];
  return (
    <div className="flex">
      {list.map((name, index) => {
        return <Button key={index} name={name} />;
      })}
    </div>
  );
};

export default ButtonList;
