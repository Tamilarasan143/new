import React from "react";
import "./header.css";
import img0 from "../../assets/images/logo.gif";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import $ from 'jquery';


export default function Header() {
  // ---------Responsive-navbar-active-animation-----------
  function test() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top": itemPosNewAnimTop.top + "px",
      "left": itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }
  $(document).ready(function () {
    setTimeout(function () { test(); });
  });
  $(window).on('resize', function () {
    setTimeout(function () { test(); }, 500);
  });
  $(".navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function () { test(); });
  });
  return (
    <>
      {/* <Navbar collapseOnSelect expand="lg" style={{
        backgroundColor:"#5161ce",
        color:"white"
      }} variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img src={img0} alt="logo" style={{ width:"100%",height: "30px" }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
           
            <Link className="naren" to={'enquiry'}>Enquriy</Link>
            <Link className="nav-link" to={'contact-us'}>Contact</Link>
            <Link className="nav-link" to={'aboutus'}>Aboutus</Link>
            <Link className="nav-link" to={'login'}>Login</Link>
            <Link className="nav-link" to={'register'}>Register</Link>
            <Link className="nav-link"  to={'acc'}>
            Myaccount
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

      <nav className="navbar navbar-expand-custom navbar-mainbg">
        <Navbar.Brand href="#home"><img src={img0} alt="logo" style={{ width: "100%", height: "30px" }} /></Navbar.Brand>
        <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent"
        style={{display:'flex',justifyContent:"flex-end"}}
        >
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
            <li className="nav-item">
              <Link className="nav-link"  to={'/'}>Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to={'contact-us'}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'aboutus'}>Aboutus</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'login'}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'register'}>Register</Link>
              
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'acc'}>
                Myaccount
              </Link>
            </li>
          </ul>
        </div>
      </nav>
     </>
  );
}
