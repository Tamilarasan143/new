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
            <Nav.Link>
              <Link to={"/"}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"enquiry"}>Enquriy</Link>
            </Nav.Link>
            <Nav.Link className="">
              <Link to={"contact-us"}>Contact</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"aboutus"}>Aboutus</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"login"}>Login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"register"}>Register</Link>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Link to={"acc"}>Myaccount</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
