import React, { useState } from "react";

const Like = ({ upvotes, downvotes }) => {
  const [upvoted, setUpvoted] = useState(upvotes);
  const [downvoted, setDownvoted] = useState(downvotes);

  function handleUpvote() {
    console.log(upvoted);
    setUpvoted((upvoted) => upvoted + 1);
  }

  function handleDownvote() {
    console.log(downvoted);
    setDownvoted((downvoted) => downvoted + 1);
  }

  return (
    <>
      <button onClick={handleUpvote}>{upvoted}👍</button>
      <button onClick={handleDownvote}>{downvoted}👎</button>
    </>
  );
};

export default Like;
