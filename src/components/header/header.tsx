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
      <Navbar collapseOnSelect expand="lg" variant="lite">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={img0}
              alt="logo"
              className="rounded mx-auto d-block img-thumbnail"
              style={{ height: "30px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link as={"li"}>
                <Link to={"/"}>Home</Link>
              </Nav.Link>
              <Nav.Link as={"li"}>
                <Link to={"/"}> Enquriy </Link>
              </Nav.Link>
              <Nav.Link as={"li"}>
                <Link to={"/"}> Contact</Link>
              </Nav.Link>
              <Nav.Link as={"li"}>
                <Link to={"/"}> Aboutus</Link>
              </Nav.Link>
              <Nav.Link as={"li"}>
                <Link to={"/"}>Login</Link>
              </Nav.Link>
              <Nav.Link as={"li"}>
                <Link to={"/"}>Register </Link>
              </Nav.Link>
              <Nav.Link eventKey={2}>
                <Link to={"/"}> Myaccount</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
