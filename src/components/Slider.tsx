import React from 'react'
import img1 from "../assets/images/banner01.jpg";
import img2 from "../assets/images/banner02.jpg";
import img3 from "../assets/images/banner03.jpg";
import img4 from "../assets/images/banner04.jpg";
import img5 from "../assets/images/banner05.jpg";

export default function Slider() {
  return (
    <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">
            <img className="img-fluid" src={img1} alt="Image"/>
          </button>
          <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="1" aria-label="Slide 2">
            <img className="img-fluid" src={img2} alt="Image" />
          </button>
          <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="2" aria-label="Slide 3">
            <img className="img-fluid" src={img1} alt="Image" />
          </button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src={img1} alt="Image" />
              <div className="carousel-caption">
              <div className="p-3 slider-width" >
                  <h4 className="text-white text-uppercase mb-4 animated zoomIn">We Are Leader In</h4>
                  <h1 className="display-1 text-white mb-0 animated zoomIn">Creative & Innovative Digital Solution</h1>
                </div>
              </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src={img1} alt="Image" />
              <div className="carousel-caption">
              <div className="p-3 slider-width" >
                  <h4 className="text-white text-uppercase mb-4 animated zoomIn">We Are Leader In</h4>
                  <h1 className="display-1 text-white mb-0 animated zoomIn">Creative & Innovative Digital Solution</h1>
                </div>
              </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src={img1} alt="Image"/>
              <div className="carousel-caption">
              <div className="p-3 slider-width">
                  <h4 className="text-white text-uppercase mb-4 animated zoomIn">We Are Leader In</h4>
                  <h1 className="display-1 text-white mb-0 animated zoomIn">Creative & Innovative Digital Solution</h1>
                </div>
              </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
