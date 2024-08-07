import React from "react";
import { useState } from "react";
import { Carousel, Row, Col, Button } from "react-bootstrap";
import ButtonComponent from "./Buttons";
import Image from "next/image";
import AuthorImg from "../assets/images/testimonial-user-img.png";
import ModalComponent from "./ModalComponent";
import ReactPlayer from "react-player";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Testimonials = ({ data, numberOfButtons = 5, activeButtonIndex = 1 }) => {
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
                           
                            <div id="button-container" className="d-flex justify-content-center mt-2">
                              {[...Array(numberOfButtons)].map((_, i) => (
                                <button
                                  key={i}
                                  className={`custom-btn ${i === activeButtonIndex ? 'active' : ''}`}
                                />
                              ))}
                            </div>                            
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
                <Carousel.Item key={index} className="video-carousel-item">
                  <div className="video-wrapper" onClick={handlePlayPause}>
                    <ReactPlayer
                      className="react-player"
                      url={item.doctorVideos.videoUrl}
                      // style={{ border: '4px solid #CCCCCC', borderRadius: '23px' }}
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
