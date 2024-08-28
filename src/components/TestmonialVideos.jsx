import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import ReactPlayer from "react-player";
import doctorVideosData from "@jsonData/doctorVideos.json";

const TestimonialVideos = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleVideoSelect = (selectedIndex) => {
    setVideoIndex(selectedIndex);
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <Carousel
       activeIndex={videoIndex}
       onSelect={handleVideoSelect}
       controls={true}
       indicators={false}
       interval={null}
       className="w-100 player-arrows"
      >
        {doctorVideosData.doctorVideos.map((video, index) => (
          <Carousel.Item
          key={index}  
    >
            {isMounted && (
              <div className="player-wrapper">
                <ReactPlayer
                  url={video.videoUrl}
                  className="react-player rounded-video"
                  width="90%"
                  height=""
                  controls={true}
                  config={{
                    youtube: {
                      playerVars: { rel: 0, showinfo: 0, modestbranding: 1 }
                    }
                  }}
                />
              </div>
            )}
            <div className="designationcenter">
              <h6>{video.doctorName }</h6>
              <small>{video.location }</small>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialVideos;
