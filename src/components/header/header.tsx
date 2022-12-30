import React from "react";
import "./header.css";
import img0 from "../../assets/images/logo.gif";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img src={img0} alt="logo" style={{ width:"100%",height: "30px" }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Link className="naren"  to={'/'}>Home</Link>
            <Link className="naren" to={'enquiry'}>Enquriy</Link>
            <Link className="naren" to={'contact-us'}>Contact</Link>
            <Link className="naren" to={'aboutus'}>Aboutus</Link>
            <Link className="naren" to={'login'}>Login</Link>
            <Link className="naren" to={'register'}>Register</Link>
            <Link className="naren"  to={'acc'}>
            Myaccount
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </>
  );
}
