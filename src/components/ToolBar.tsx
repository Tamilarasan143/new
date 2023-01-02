import React from 'react'

export default function ToolBar() {
  return (
    <div className="container-fluid py-4 px-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="row align-items-center top-bar">
        <div className="col-lg-4 col-md-12 text-center text-lg-start">
          <a href="" className="navbar-brand m-0 p-0">
            <h1 className="fw-bold text-primary m-0"><i className="fa fa-laptop-code me-3"></i>DGcom</h1>
           {/* <img src="img/logo.png" alt="Logo" /> */}
          </a>
        </div>
        <div className="col-lg-8 col-md-7 d-none d-lg-block">
          <div className="row">
            <div className="col-4">
              <div className="d-flex align-items-center justify-content-end">
                <div className="flex-shrink-0 btn-lg-square border rounded-circle">
                  <i className="far fa-clock text-primary"></i>
                </div>
                <div className="ps-3">
                  <p className="mb-2">Opening Hour</p>
                  <h6 className="mb-0">Mon - Fri, 8:00 - 9:00</h6>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="d-flex align-items-center justify-content-end">
                <div className="flex-shrink-0 btn-lg-square border rounded-circle">
                  <i className="fa fa-phone text-primary"></i>
                </div>
                <div className="ps-3">
                  <p className="mb-2">Call Us</p>
                  <h6 className="mb-0">+012 345 6789</h6>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="d-flex align-items-center justify-content-end">
                <div className="flex-shrink-0 btn-lg-square border rounded-circle">
                  <i className="far fa-envelope text-primary"></i>
                </div>
                <div className="ps-3">
                  <p className="mb-2">Email Us</p>
                  <h6 className="mb-0">info@example.com</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
