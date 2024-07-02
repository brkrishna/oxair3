import React from "react";
//import { Navbar, Nav, Container } from "reactstrap";
import Image from "next/image";
import Logo from "/public/images/Oxair-Logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AboutOxair from "@/pages/aboutOxair";
import productPage from "@/pages/highPerformanceModels";
import { useRouter } from "next/router";
import ButtonComponent from "./Buttons";


const Header = () => {

  const router = useRouter()
  const getQuote =() =>{
    router.push(`/contactUs`);
  }

  return (
    <>
        <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/"> <Image src={Logo} alt="" width={221} height={56} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutOxair">About Us</Nav.Link>
            <NavDropdown title="Our Products" id="collapsible-nav-dropdown">
            <Nav.Link href="/highPerformanceModels">High Performance Models</Nav.Link>
              <NavDropdown.Item href="/superSaverModels">
              Super Saver Models
              </NavDropdown.Item>
              <NavDropdown.Item href="/oxairPressureVessels">Oxair Pressure Vessels</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
              Other Products
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/understandingOurProducts">Understanding Our Products</NavDropdown.Item>
                <NavDropdown.Item href="/faqs">
                FAQs
                </NavDropdown.Item>
                <NavDropdown.Item href="/companyAndIndustryNews">Company and Industry News</NavDropdown.Item>
              </NavDropdown> 
            
            <Nav.Link href="/contactUs">
            <ButtonComponent className="get-quote" label="Get Quote" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};


export default Header;
