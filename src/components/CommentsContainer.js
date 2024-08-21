import React from "react";
import CommentsList from "./CommentsList";
import { commentsData } from "../utils/commentsData";

const CommentsContainer = () => {
  //   console.log(commentsData);
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
