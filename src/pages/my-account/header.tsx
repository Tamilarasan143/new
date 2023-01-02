import "./header.css";
import React from "react";
import { Container, Navbar, NavDropdown } from "react-bootstrap";
import { useUserContext } from "../../data/providers/users/hooks";
import { useNavigate } from "react-router";
import img0 from "../../assets/images/logo/logo.gif";

import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function MyAccountHeader() {
  const { user, logout } = useUserContext();
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/acc">
          <img
            src={img0}
            alt="Mithra Resorts & Club"
            className=""
            style={{ height: "30px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto"></Nav>

          <Nav>
            <NavDropdown title={user?.name} id="collasible-nav-dropdown">
              <NavDropdown.Item as={"li"}>
                <Link to={"/acc/myaccount"}> My Account </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  logout().then((r) => {
                    navigate("/");
                  });
                }}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
