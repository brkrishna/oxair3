import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";

const TestimonialVideos = ({ videos }) => {
  const [videoIndex, setVideoIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  //const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this code runs only on the client side
    //setIsClient(true);
  }, []);

  const handleVideoSelect = (selectedIndex) => {
    setVideoIndex(selectedIndex);
    setPlaying(false); // Stop playing when a new video is selected
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
  };
console.log(videos)
  return (
    <>
      <Carousel
        activeIndex={videoIndex}
        onSelect={handleVideoSelect}
        controls={true}
        indicators={false}
        interval={null}
        className="w-100"
      >
        
        {videos.map((video, index) => (
          <Carousel.Item key={index}>
            <div className="video-wrapper" onClick={handlePlayPause}>
              <ReactPlayer
                className="react-player rounded-video"
                url={video.videoUrl}
                controls={true}
                 playing={index === videoIndex && playing}
              />

            </div>
            <div className="designationcenter">
              <h6>{video.doctorName || "Unknown Doctor"}</h6>
              <small>{video.location || "Unknown Location"}</small>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default TestimonialVideos;
