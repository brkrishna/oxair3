import React from "react";
import InnerPageBanner from "@/components/InnerPageBanners";
import { Container, Row, Col} from "react-bootstrap";
import Image from "next/image";
import Roi from "../assets/images/roi.jpg"

import "../styles/globals.css";

const GetQuote = () => {

  return (
    <>
      <InnerPageBanner
        heading="Get Quote"
        subHeading="ROI"
      />
      <Container className="mt-5">
        <Row>
          <Col>
          <Image src={Roi} alt="ROI Image" layout="responsive" style={{ width: '100%', height: 'auto' }} />
          </Col>
          
        </Row>
        <hr className="mt-4" />
      </Container>
    </>
  );
};

export default GetQuote;
