import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container-fluid" style={{ backgroundColor: "#FFF154" }}>
        <div
          className="row"
          style={{ borderTop: "3px #FFCC00 solid", height: "4px" }}
        ></div>
        <div
          className="row toplink justify-content-center"
          style={{ backgroundColor: "#0e5c9f" }}
        >
          <ul className="footer-nav topLink">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">| Conference Hall</a>
            </li>
            <li>
              <a href="/">Guest Rooms</a>
            </li>
            <li>
              <a href="/">Bar & Resturants</a>
            </li>
            <li>
              <a href="/">Birthday Functions</a>
            </li>
            <li>
              <a href="/">Spa</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
          </ul>
        </div>

        <div
          className="row toplink justify-content-center"
          style={{ backgroundColor: "#0e5c9f" }}
        >
          <div className="col-5">
            <div style={{ textAlign: "left" }} className="copyright">
            © Mithra Resorts & Club, All Right Reserved.
            </div>
          </div>
          <div className="col-5 pageContent">
            <div style={{ textAlign: "right" }} className="copyright">
              Web Designed and Maintained by JSAN Softwares
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
