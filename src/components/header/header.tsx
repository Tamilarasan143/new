import React from "react";
import "./header.css";
import img0 from "../../assets/images/logo.gif";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";



export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img src={img0} alt="logo" style={{ height: "52px" }} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Link to={'/'} className="nav-link">Home</Link>
            <Link className="nav-link" to={'enquiry'}>Enquriy</Link>
            <Link className="nav-link" to={'contact-us'}>Contact</Link>
            <Link className="nav-link" to={'aboutus'}>Aboutus</Link>
            <Link className="nav-link" to={'login'}>Login</Link>
            <Link className="nav-link" to={'register'}>Register</Link>
            <Link className="nav-link" to={'acc'}>Myaccount</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
