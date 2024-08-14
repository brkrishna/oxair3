import React from "react";
import { useState } from "react";
import { Carousel, Row, Col, Button } from "react-bootstrap";
import ButtonComponent from "./Buttons";
import Image from "next/image";
import AuthorImg from "../assets/images/testimonial-user-img.png";
import ModalComponent from "./ModalComponent";
import ReactPlayer from "react-player";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Testimonials = ({ data, numberOfButtons = 11 }) => {
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
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

  const handleButtonClick = (index) => {
    setActiveCarouselIndex(index);
  };
  return (
    <>
      <div className="testimonial-section">
        <hr />
        <h5 className="section-heading">What our customers say</h5>
        <Row className="position-relative">
          <Col xs={12} sm={12} md={12} lg={6} xl={6} className="d-flex flex-column img-fluid">
            <Carousel interval={3000} controls={false} indicators={false}
            activeIndex={activeCarouselIndex} // Set active index based on state
            onSelect={(selectedIndex) => setActiveCarouselIndex(selectedIndex)}>
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
            <div id="button-container" className="">
                              {[...Array(numberOfButtons)].map((_, i) => (
                                <button
                                key={i}
                                className={`custom-btn ${i === activeCarouselIndex ? 'active' : ''}`}
                                onClick={() => handleButtonClick(i)}
                              />
                              ))}
                            </div>
            <ModalComponent
              show={showModal}
              handleClose={handleCloseModal}
              modalContent={modalContent}
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} className="d-flex flex-column position-relative second-carousal">
            <div className="vertical-line1"></div>
            <Carousel
              activeIndex={videoIndex}
              onSelect={handleVideoSelect}
              controls={false}
              indicators={false}
              interval={null}
              className="w-100"
            >
              {data.map((item, index) => (
                <Carousel.Item key={index} className="">
                  <div className="video-wrapper" onClick={handlePlayPause}>
                    <ReactPlayer
                      className="react-player rounded-video"
                      url={item.doctorVideos.videoUrl}
                     
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
            <div className="controls-container">
              <button className="control-btn prev" onClick={handlePrev}>
                <i className="fas fa-angle-left"></i>
              </button>
              <button className="control-btn next" onClick={handleNext}>
                <i className="fas fa-angle-right"></i>
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
