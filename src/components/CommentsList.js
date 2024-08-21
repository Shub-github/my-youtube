import React, { useState } from "react";
import Comment from "./Comment";

// using component again for reply using recursion.
// A recursive function is a function that calls itself somewhere within the body of the function. example mention below
// function recursiveFunc() {
//     // some code here...
//     recursiveFunc()
//   }

const CommentsList = ({ comments }) => {
  //   console.log(comments);
  return comments.map((comm) => (
    //   console.log(comm),
    <div key={comm.id}>
      <Comment data={comm} />

      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comm.replies} />
      </div>
    </div>
  ));
};
export default CommentsList;
