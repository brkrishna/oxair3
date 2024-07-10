import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
//import {FaPhoneAlt, FaEnvelope} from 'react-icons'
import PhoneIcon from "../assets/icons/PhoneIcon.png";
import EmailIcon from "../assets/icons/EmailIcon.png";

const ContactUsToday = () => {
  return (
    <>
      <div className="contact-us-banner">
      <Row className="align-items-center p-3">
        <Col md={6} className="text-white border-r">
          <h4>Contact Us Today</h4>
          <p>
            Unleash the power of our oxygen generators to transform your
            operations.
          </p>
        </Col>
        <Col xs={12} md={6} className="text-center d-flex flex-column flex-md-row justify-content-around">
          <div className="contact-info mb-3 mb-md-0">
            <Image
              className="icon"
              src={PhoneIcon}
              alt="Contact"
              width={50}
              height={50}
            />
            <span className="contact-text">+91-44-29560328</span>
          </div>
          <div className="contact-info">
            <Image
              className="icon"
              src={EmailIcon}
              alt="Email"
              width={50}
              height={50}
            />
            <span className="contact-text">inquiries@oxair.in</span>
          </div>
        </Col>
      </Row>
    </div>
    </>
  );
};

export default ContactUsToday;
