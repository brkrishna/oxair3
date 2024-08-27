import React from "react";
import { useState } from "react";
import { Carousel, Row, Col, Button } from "react-bootstrap";
import ButtonComponent from "./Buttons";
import Image from "next/legacy/image";
import AuthorImg from "../assets/images/testimonial-user-img.png";
import ModalComponent from "./ModalComponent";
import '@fortawesome/fontawesome-free/css/all.min.css';
import TestimonialVideos from "./TestmonialVideos";
//import testivideosdata from "@jsonData/testimonialVideos.json";


const Testimonials = ({ data, numberOfButtons = 11 }) => {
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  //const videos = testivideosdata.doctorVideos.length > 0 ? testivideosdata.doctorVideos:[];
  

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const onCLickReadMore = (text) => {
    const fullText = text.join("\n\n")
    setShowModal(true);
    setModalContent(fullText);
  };
  const handleCloseModal = () => setShowModal(false);

  // const handleVideoSelect = (selectedIndex) => {
  //   setVideoIndex(selectedIndex);
  //   setPlaying(false); // Stop playing when a new video is selected
  // };

  // const handleNext = () => {
  //   setVideoIndex((prevIndex) => (prevIndex + 1) % data.length);
  //   setPlaying(false); // Stop playing when navigating
  // };

  // const handlePrev = () => {
  //   setVideoIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  //   setPlaying(false); // Stop playing when navigating
  // };

  

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
            <Carousel interval={3000} controls={false} indicators={true}>
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
                          <Image fetchpriority="high" src={item.image} width={80} height={80} alt="Author" />
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
          <Col xs={12} sm={12} md={12} lg={6} xl={6} className="d-flex flex-column position-relative second-carousal">
          <TestimonialVideos />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Testimonials;
