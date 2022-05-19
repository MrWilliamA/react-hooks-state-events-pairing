import React from "react";

const Comments = ({ comments }) => {
  return (
    <>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>
            <strong>{comment.user}</strong>
          </p>
          <p>{comment.comment}</p>
        </div>
      ))}
    </>
  );
};

export default Comments;
