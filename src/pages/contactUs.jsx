import React from "react";
import { useState } from "react";
import InnerPageBanner from "@/components/InnerPageBanners";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import phoneIcon from "@/assets/icons/PhoneIcon.png";
import emailIcon from "@/assets/icons/EmailIcon.png";
import Image from "next/legacy/image";
import ButtonComponent from "@/components/Buttons";
import "../styles/globals.css";

const ContactUs = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <InnerPageBanner
        heading="How can we assist you ?"
        subHeading="Contact us today"
      />
      <Container className="mt-5 position-relative">
      <div className="vertical-line"></div>
        <Row>
          <Col md={6}>
            <div >
              <h1 className="dark-blue font-gas">
                Oxair Gas Systems India Pvt Ltd
              </h1>
              <div className="d-flex align-items-center gap-3 my-4">
                <Image className="icon-size" fetchpriority="high" src={phoneIcon} alt="Layer 1"  />
                <p className="mt-3 contact-text2">
                  +91-44-29560328
                </p>
              </div>

              <div className="d-flex align-items-center gap-3 mt-3">
                <Image fetchpriority="high" src={emailIcon} alt="Layer 2" className="icon-size" />
                <p className="mt-3 contact-text2">
                  inquiries@oxair.in
                </p>
              </div>

              <p className="mt-4 dark-blue work">
                Working Hours
              </p>
              <p className="text-dark">Monday to Friday | 8:00 AM to 6:00 PM</p>
              <hr className="mt-5" />
              <h2 className="font-gas mt-4 dark-blue">Request a quote</h2>

              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Form.Group controlId="validationCustom01" className="text-field">
                    <Form.Label>Full Name</Form.Label> 
                    <Form.Control type="text" placeholder="" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a full name.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group controlId="validationCustom02" className=" text-field">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="text" placeholder="" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email address.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group controlId="validationCustom03" className=" text-field">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder="" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid mobile number.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group controlId="validationCustom04" className="text-field">
                    <Form.Label>Select Product</Form.Label>
                    <InputGroup>
                      <select className="form-select" required>
                        <option value=""></option>
                        <option value="">Product1</option>
                        <option value="">Product2</option>
                        <option value="">Product3</option>
                      </select>
                      <Form.Control.Feedback type="invalid">
                        Please select the product
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group controlId="validationCustome05" className="text-field1">
                    <Form.Label>Your Query</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="" />
                  </Form.Group>
                </Row>
                <Button  className=" btn-submit img-fluid"type="submit" label="Submit">
                  SUBMIT
                </Button>
              </Form>
            </div>
          </Col>
          
          <Col md={6} className="gap-4 ">
            <div  className="space-y-4 mx-2">
              <div className="mb-5">
                <h2 className="font-gas2 dark-blue">Oxair Gas Systems</h2>
                <p className="my-3 address1">
                  Plot #T6,
                  <br /> SIDCO Industrial Estate Kattur,
                  <br /> Vellanoor Post,
                  <br /> Chennai 600062, India
                </p>
                <iframe
                  className="border p-3 w-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.167158508069!2d144.96328511531697!3d-37.81421797975174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b1b64c0a7fcb!2s0x6ad642af0f11fd81%3A0xf577b1b64c0a7fcb!5e0!3m2!1sen!2sin!4v1621513928826!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              <div>
                <h2 className="font-gas2 dark-blue">
                  Oxair Pressure Vessels (Industrial)
                </h2>
                <p className="my-3 address1">
                  Plot No 41,
                  <br /> Auetta Industria Estate,
                  <br /> Morai Village, Chennai No 41,
                  <br /> Thiruvallur TN 600055, India
                </p>
                <iframe
                  className="border p-3 w-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.167158508069!2d144.96328511531697!3d-37.81421797975174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b1b64c0a7fcb!2s0x6ad642af0f11fd81%3A0xf577b1b64c0a7fcb!5e0!3m2!1sen!2sin!4v1621513928826!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>
        <hr className="mt-4" />
      </Container>
    </>
  );
};

export default ContactUs;
