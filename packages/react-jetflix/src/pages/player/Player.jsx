import React from "react";
import { Link } from "react-router-dom";

export const Player = () => {
  return (
    <div className="player">
      <Link to="/">Home</Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        // Movie
        src="movie./..."
      ></video>
    </div>
  );
};
