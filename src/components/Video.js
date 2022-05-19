import React from "react";

const Video = ({ videoObject }) => {
  const vidUrl = videoObject.embedUrl;
  const vidTitle = videoObject.title;

  const vidViews = videoObject.views;
  const vidCreated = videoObject.createdAt;

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={vidUrl}
        frameBorder="0"
        allowFullScreen
        title={vidTitle}
      />
      <h1>{vidTitle}</h1>
      <p>
        <span>{vidViews} Views | </span>
        <span>Created at {vidCreated}</span>
      </p>
    </div>
  );
};

export default Video;
