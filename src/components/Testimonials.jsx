import React, { useState } from "react";
import { Carousel, Row, Col, Modal } from "react-bootstrap";
import Image from "next/image";
import AuthorImg from "../assets/images/testimonial-user-img.png";
import ReactPlayer from "react-player";
import ButtonComponent from "./Buttons";
import ModalComponent from "./ModalComponent";

const Testimonials = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const onCLickReadMore = (text) => {
    const fullText = text.join("\n\n")
    setShowModal(true);
    setModalContent(fullText);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="testimonial-section">
        <h5 className="section-heading">What our customers say</h5>
        <Carousel>
          {data.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <Row>
                  <Col xs={12} sm={6} md={6} lg={6} xl>
                    <div className="d-flex justify-content-center">
                      <div className="testimonial">
                        <p className="testimonial-text">{item.text.readText.join(" ")}</p>

                        <div className="btn-read-more">
                          <ButtonComponent
                            key={index}
                            onClick={() => {
                              onCLickReadMore(item.text.full);
                            }}
                            label="Read More"
                          />
                        </div>
                        {/* <p>{item.text.full}</p> */}
                        <div className="author-sec">
                          <div className="img-sec">
                            <Image
                              src={AuthorImg}
                              width={80}
                              height={92}
                              alt="Author"
                            />
                          </div>
                          <div className="autor-details">
                            <h6>{item.name}</h6>
                            <small>{item.designation}</small>
                            <small>{item.company}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={6} md={6} lg={6} xl>
                    <ReactPlayer
                      className="react-player"
                      url={item.videoUrl}
                      objectFit="fill"
                      layout="responsive"
                      width="100%"
                      height="100%"
                      controls={true}
                    />
                  </Col>
                </Row>
              </Carousel.Item>
            );
          })}
        </Carousel>
        <ModalComponent
          show={showModal}
          handleClose={handleCloseModal}
          modalContent={modalContent}
        />
      </div>
    </>
  );
};

export default Testimonials;
