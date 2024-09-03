import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/legacy/image";
import PhoneIcon from "../assets/icons/PhoneIcon.png";
import EmailIcon from "../assets/icons/EmailIcon.png";

const ContactUsToday = () => {
  return (
    <>
      <div className="contact-us-banner">
      <Row className="align-items-center p-3">
        <Col md={12} lg={6} className="text-white cts-sec">
          <h4>Contact Us Today</h4>
          <p>
            Unleash the power of our oxygen generators to transform your
            operations.
          </p>
        </Col>
        <Col xs={12} md={12} lg={6}>
        <div className="text-center d-flex flex-column flex-md-row justify-content-around">
          <div className="contact-info mb-3 mb-md-0">
            <Image
              className="icon"
              src={PhoneIcon}
              alt="Contact"
              
            />
            <span className="contact-text">+91-44-29560328</span>
          </div>
          <div className="contact-info">
            <Image
            
              className="icon"
              src={EmailIcon}
              alt="Email"
              
            />
            <span className="contact-text1">inquiries@oxair.in</span>
          </div>
          </div>
        </Col>
      </Row>
    </div>
    </>
  );
};

export default ContactUsToday;
