import React from "react";
import Image from "next/legacy/image";
import Logo from "/public/images/Oxair-Logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ButtonComponent from "./Buttons";

const Header = () => {
  return (
    <Navbar className="py-3" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image  className="homebannerlogo" src={Logo} alt="Oxair Logo" width={180} height={52} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto flex-column flex-lg-row border-2">
            <Nav.Link  href="/">Home</Nav.Link>
            <Nav.Link  href="/aboutOxair">About Us</Nav.Link>
            <NavDropdown className="custom-dropdown" title="Our Products" id="collapsible-nav-dropdown">
            <NavDropdown.Item className="products"href="../highPerformanceModels">High Performance Models</NavDropdown.Item>
              <NavDropdown.Item className="products" href="../superSaverModels">Super Saver Models</NavDropdown.Item>
              {/* <NavDropdown.Item className="products" href="/oxairPressureVessels">Oxair Pressure Vessels</NavDropdown.Item>
              <NavDropdown.Item className="products" href="/">Other Products</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown className="custom-dropdown" title="Resources" id="collapsible-nav-dropdown-resources">
              {/* <NavDropdown.Item className="products" href="/understandingOurProducts">Understanding Our Products</NavDropdown.Item>
              <NavDropdown.Item className="products" href="/faqs">FAQs</NavDropdown.Item> */}
              <NavDropdown.Item className="products" href="/companyAndIndustryNews">Company and Industry News</NavDropdown.Item>
              <NavDropdown.Item className="products" href="/gallery">Gallery</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="" href="/contactUs">ContactUs</Nav.Link>
            <Nav.Link className="" href="/getQuote">
              <ButtonComponent className="get-quote" label="Get Quote" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
