import React from "react";
import Image from "next/legacy/image";
import FooterLog from "../assets/images/Oxair-Logo.png";
import { Container, Row, Col } from "react-bootstrap";
//import Image from 'react-bootstrap';
import FacebookIcon from "../assets/icons/facebook_icon.png";
import YoutubeIcon from "../assets/icons/youtube_icon.png";
import XLogo from "../assets/icons/exe_icon.png";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Link href="/">
          <Image src={FooterLog} alt="Axair" width={135}  className="footer-log" />
        </Link>
        <Row className="py-4">
          <Col md={4}>
            <div className="footer-content">
              <h6>Our Factory</h6>
              <address>
                Plot #76, SIDCO Industrial Estate
                <br />
                Kattur, Vellanor post,
                <br />
                Chennai 600 062
              </address>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-content">
              <h6>Quick Links</h6>
              <ul className="list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">Products</Link>
                </li>
                <li>
                  <Link href="/aboutOxair">About Oxair India</Link>
                </li>
                <li>
                  <Link href="/">Resources</Link>
                </li>
                <li>
                  <Link href="/">Blog</Link>
                </li>
                <li>
                  <Link href="/contactUs">Contact Us</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-content">
              <h6>Product Links (OG - Oxygen Generators)</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Aqua OG</a>
                </li>
                <li>
                  <a href="#">Glass OG</a>
                </li>
                <li>
                  <a href="#">Metal Cutting OG</a>
                </li>
                <li>
                  <a href="#">Paper OG</a>
                </li>
                <li>
                  <a href="#">Ozone OG</a>
                </li>
                <li>
                  <a href="#">Sewage Treatment OG</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col md={8}>
            <p className="copy-rights">
              © Copyright 2024 Oxair India. All Rights Reserved |{" "}
              <a className="terms-privacy">Terms & Privacy</a>
            </p>
          </Col>
          <Col md={4} className="text-right">
            <div className="social-icons">
              <a href="#">
                <Image fetchpriority="high" src={FacebookIcon} width={30} alt="Facebook" />
              </a>
              <a href="#">
                <Image fetchpriority="high" src={XLogo} width={30} alt="X" />
              </a>
              <a href="#">
                <Image fetchpriority="high" src={YoutubeIcon} width={30} alt="Youtube" />
              </a>
            </div>
          </Col>
        </Row>
        <div className="footerstyle mt-5"></div>
      </Container>
    </footer>
  );
};

export default Footer;