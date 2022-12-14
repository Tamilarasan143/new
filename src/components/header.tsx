import React from 'react'
import './home.css'
import img0 from "../assets/images/logo.gif"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Header() {
  return (
    <header>
      {/* <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark"> */}
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          {/* <div className="container-fluid">
          <a className="navbar-brand" href="#" ><img src={img0} alt="logo" style={{height:"52px"}}/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <Navbar.Brand href="#home"><img src={img0} alt="logo" style={{ height: "52px" }} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav " className='Nvc' >
            <div >
              <Nav >
                <Nav.Link href="#deets">Home</Nav.Link>
                <Nav.Link href="#deets">Eniqury</Nav.Link>
                <Nav.Link href="#deets">Contact Us</Nav.Link>
                <Nav.Link href="#memes">About us</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  My Account
                </Nav.Link>
              </Nav>
            </div>
            {/* </div> */}
            {/* </nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
