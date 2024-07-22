import React from "react";
//import { Navbar, Nav, Container } from "reactstrap";
import Image from "next/image";
import Logo from "/public/images/Oxair-Logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
        <Navbar.Brand href="/"> <Image src={Logo} alt="" width={224} height={56} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="mx-2" href="/">Home</Nav.Link>
            <Nav.Link className="mx-2" href="/aboutOxair">About Us</Nav.Link>
            <NavDropdown className="mx-2" title="Our Products" id="collapsible-nav-dropdown">
            <Nav.Link className="products"href="/highPerformanceModels">High Performance Models</Nav.Link>
              <NavDropdown.Item className="products" href="/superSaverModels">Super Saver Models</NavDropdown.Item>
              <NavDropdown.Item className="products" href="/oxairPressureVessels">Oxair Pressure Vessels</NavDropdown.Item>
              <NavDropdown.Item className="products" href="/">Other Products</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="mx-2" title="Resources" id="collapsible-nav-dropdown">
                <NavDropdown.Item className="products" href="/understandingOurProducts">Understanding Our Products</NavDropdown.Item>
                <NavDropdown.Item className="products" href="/faqs">FAQs</NavDropdown.Item>
                <NavDropdown.Item className="products" href="/companyAndIndustryNews">Company and Industry News</NavDropdown.Item>
              </NavDropdown> 
            
            <Nav.Link className="mx-2" href="/contactUs">
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
