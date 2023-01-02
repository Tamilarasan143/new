import React from "react";
import "./header.css";
import img0 from "../../../assets/images/logo/logo.gif";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../data/providers/users/hooks";

export default function Header() {
  const { user } = useUserContext();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="lite">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={img0}
              alt="logo"
              className=""
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
              {!user && (
                <Nav.Link as={"li"}>
                  <Link to={"/login"}>Login</Link> /{" "}
                  <Link to={"/register"}>Register </Link>
                </Nav.Link>
              )}
              {user && (
                <Nav.Link as={"li"} eventKey={2}>
                  <Link to={"/acc"}> Myaccount</Link>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
