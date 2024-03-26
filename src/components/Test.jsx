import React, { useRef } from "react";
import video from "../assets/images/notion.mp4";

const Test = () => {
  const videoRef = useRef(null);

  // Function to play the video muted when hovering over it
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          videoRef.current.currentTime = 0;
          videoRef.current.muted = false;
        })
        .catch((error) => {
          console.error("Failed to play video:", error);
        });
    }
  };

  // Function to pause the video when mouse leaves
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        width="640"
        height="360"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
};

export default Test;