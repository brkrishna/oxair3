import React from "react";
import { useState } from "react";
import { Carousel, Row, Col, Button } from "react-bootstrap";
import ButtonComponent from "./Buttons";
import Image from "next/image";
import AuthorImg from "../assets/images/testimonial-user-img.png";
import ModalComponent from "./ModalComponent";
import ReactPlayer from "react-player";

const Testimonials = ({ data }) => {
  const [videoIndex, setVideoIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const onCLickReadMore = (text) => {
    const fullText = text.join("\n\n")
    setShowModal(true);
    setModalContent(fullText);
  };
  const handleCloseModal = () => setShowModal(false);

  const handleVideoSelect = (selectedIndex) => {
    setVideoIndex(selectedIndex);
    setPlaying(false); // Stop playing when a new video is selected
  };

  const handleNext = () => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % data.length);
    setPlaying(false); // Stop playing when navigating
  };

  const handlePrev = () => {
    setVideoIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    setPlaying(false); // Stop playing when navigating
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  return (
    <>
      <div className="testimonial-section">
        <hr />
        <h5 className="section-heading">What our customers say</h5>
        <Row className="position-relative">
          <Col xs={12} sm={6} md={6} lg={6} xl={6} className="d-flex flex-column img-fluid">
            <Carousel interval={3000} controls={false} indicators={false}>
              {data.map((item, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-center">
                    <div className="testimonial">
                      <p className="testimonial-text">{item.text.readText}</p>
                      <div className="btn-read-more">
                          <ButtonComponent
                            key={index}
                            onClick={() => {
                              onCLickReadMore(item.text.full);
                            }}
                            label="Read More"
                          />
                        </div>
                      <div className="author-sec">
                        <div className="img-sec">
                          <Image src={AuthorImg} width={80} height={92} alt="Author" />
                        </div>
                        <div className="autor-details">
                          <h6>{item.name}</h6>
                          <small>{item.designation}</small>
                          <small>{item.company}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
            <ModalComponent
          show={showModal}
          handleClose={handleCloseModal}
          modalContent={modalContent}
        />
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6} className="d-flex flex-column position-relative">
          <div className="vertical-line"></div>

            <Carousel
              activeIndex={videoIndex}
              onSelect={handleVideoSelect}
              controls={false}
              indicators={false}
              interval={null}
              className="w-100"
            >
              {data.map((item, index) => (
                <Carousel.Item key={index} className="video-carousel-item">
                  <div className="video-wrapper" onClick={handlePlayPause}>
                    <ReactPlayer
                      className="react-player"
                      url={item.doctorVideos.videoUrl}
                      style={{ border: '4px solid #CCCCCC', borderRadius: '4%' }}
                      width="60%"
                      height="60%"
                      controls={false} // Disable the default ReactPlayer controls
                      playing={index === videoIndex && playing} // Only play the current video if playing is true
                    />
                    {!playing && <div className="play-button">▶</div>}
                     
                  </div>
                  <div className="designationcenter">
                     <h6>{item.doctorVideos.doctorName}</h6>
                     <small>{item.doctorVideos.location}</small>
                     </div>
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="custom-controls">
              <button className="control-btn prev" onClick={handlePrev}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </button>
              <button className="control-btn next" onClick={handleNext}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </button>
            </div>
          </Col>
        </Row>
        <hr />
      </div>
    </>
  );
};

export default Testimonials;
