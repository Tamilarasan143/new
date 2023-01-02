import React from 'react'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
      <a href="#" className="navbar-brand ms-3 d-lg-none">MENU</a>
      <button type="button" className="navbar-toggler me-3" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav me-auto p-3 p-lg-0">
          <a href="index.html" className="nav-item nav-link active">Home</a>
          <a href="about.html" className="nav-item nav-link">About Us</a>
          <a href="service.html" className="nav-item nav-link">Services</a>
          <a href="project.html" className="nav-item nav-link">Projects</a>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div className="dropdown-menu border-0 rounded-0 rounded-bottom m-0">
              <a href="feature.html" className="dropdown-item">Features</a>
              <a href="team.html" className="dropdown-item">Our Team</a>
              <a href="testimonial.html" className="dropdown-item">Testimonial</a>
              <a href="404.html" className="dropdown-item">404 Page</a>
            </div>
          </div>
          <a href="contact.html" className="nav-item nav-link">Contact Us</a>
        </div>
        <a href="#" className="btn btn-sm btn-light rounded-pill py-2 px-4 d-none d-lg-block">Get Started</a>
      </div>
    </nav>
  )
}
