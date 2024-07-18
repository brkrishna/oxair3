import React from "react";
import { Carousel, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import AuthorImg from "../assets/images/testimonial-user-img.png";
import ReactPlayer from "react-player";

const Testimonials = ({ data }) => {
  const [videoIndex, setVideoIndex] = React.useState(0);

  const handleVideoSelect = (selectedIndex) => {
    setVideoIndex(selectedIndex);
  };

  return (
    <>
      <div className="testimonial-section">
        <h5 className="section-heading">What our customers say</h5>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6} xl={6} className="d-flex flex-column img-fluid">
            <Carousel interval={3000}
             controls={false}
             indicators={false}>
              {data.map((item, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-center">
                    <div className="testimonial">
                      <p className="testimonial-text">{item.text.readText}</p>
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
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6} className="d-flex flex-column position-relative">
            <Carousel
              activeIndex={videoIndex}
              onSelect={handleVideoSelect}
              controls={false}
              indicators={false}
              interval={null}
              className="w-100"
            >
              {data.map((item, index) => (
                <Carousel.Item key={index}>
                  <ReactPlayer
                    className="react-player img-fluid"
                    url={item.videoUrl}
                    width="100%"
                    height="auto"
                    controls={true}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="video-container position-absolute top-50 start-50 translate-middle w-100 d-flex justify-content-between align-items-center">
              <Button className="video-control left" onClick={() => handleVideoSelect((videoIndex - 1 + data.length) % data.length)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </Button>
              <Button className="video-control right" onClick={() => handleVideoSelect((videoIndex + 1) % data.length)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Testimonials;
