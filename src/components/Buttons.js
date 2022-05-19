import React from "react";
import CommentsToggle from "./CommentsToggle";
import Like from "./Like";

const Buttons = ({ videoObject }) => {
  return (
    <>
      <div>
        <Like downvotes={videoObject.downvotes} upvotes={videoObject.upvotes} />
      </div>
      <div>
        {" "}
        <CommentsToggle toggle={videoObject.comments} />
      </div>
    </>
  );
};

export default Buttons;
