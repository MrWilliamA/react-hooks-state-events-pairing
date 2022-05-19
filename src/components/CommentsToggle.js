import React, { useState } from "react";
import Comments from "./Comments";

const CommentsToggle = ({ toggle }) => {
  const [showComments, setShowComments] = useState(false);
  const [toggleText, setToggleText] = useState("Show Comments");

  function handleToggle() {
    if (toggleText === "Show Comments") {
      setToggleText("Hide Comments");
      setShowComments(true);
    } else {
      setToggleText("Show Comments");
      setShowComments(false);
    }
  }

  return (
    <>
      <button onClick={handleToggle} value="Show Comments">
        {toggleText}
      </button>
      {/* <div>{showComments ? showCommentsFunction(toggle) : ""}</div> */}

      <div>{showComments ? <Comments comments={toggle} /> : ""}</div>
    </>
  );
};

export default CommentsToggle;
