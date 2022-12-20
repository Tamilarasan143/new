import React from "react";
import Header from "../components/header/header";
import NoTransitionExample from "./homepage/carcoual";
import Footer from "../components/footer/footer";
import "../components/header/home.css";
import img0 from "../assets/images/Fcl_header.gif";
import img1 from "../assets/images/facilitiestariff.jpg";
import img2 from "../assets/images/membershiptariff.jpg";
import img3 from "../assets/images/routemap.jpg";


export default function AboutusPage() {
  return (
    <>
      <Header />
      <NoTransitionExample />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <tr>
          <td
            width="197"
            height="337"
            valign="top"
            style={{ backgroundColor: "#dbdad9" }}
          >
            <div id="menubg">
              <div id="menu">
                <div className="Fcl" style={{ width: "205", height: "36" }}>
                  <img src={img0} alt="logo" />
                </div>
                <ul>
                  <li className="brd">
                    <a href="facilities#swp">Swimming Pool</a>
                  </li>
                  <li className="brd">
                    <a href="facilities#gym">Gym</a>
                  </li>
                  <li className="brd">
                    <a href="facilities#ymc">Yoga &amp; Meditation Center</a>
                  </li>
                  <li className="brd">
                    <a href="facilities#nm">Naturopathic Massage</a>
                  </li>
                  <li className="brd">
                    <a href="facilities#ing">Indoor Games</a>
                  </li>
                  <li className="brd">
                    <a href="facilities#otg">Outdoor Games</a>
                  </li>
                  <li className="brd">
                    <a href="facilities#ctl">Children's Tot lot</a>
                  </li>
                  <li className="brd">
                    <a href="facilities#oat">Open Air Theater</a>
                  </li>
                  <li className="brd">
                    <a href="facilities#conh">Conference Hall</a>
                  </li>
                  <li className="brd">
                    <a href="facilities#mcr">Multi cuisine Restaurant</a>
                  </li>
                  <li className="brd">
                    <a href="facilities#bar">Bar</a>
                  </li>
                  <li className="brd">
                    <a href="facilities#grooms">Guest Rooms</a>
                  </li>
                  <li className="brd-none">
                    <a href="facilities#scc">Special Coaching Camps</a>
                  </li>
                </ul>
              </div>
            </div>
          </td>
          <td width="1004" valign="top" style={{ backgroundColor: "#FFFFFF" }}>
            <table width="100%">
              <tr>
                <td valign="top">
                  <div className="padding">
                    <div className="pageTitle">About Us</div>
                    <p className="pageContent">
                      MITHRA RESORTS & CLUB was established in 2009. A long time
                      before we aim to create a clubbing for the new generation
                      and their familys ,Today' new generation work harder and
                      harder so, We understand and created an exclusive club for
                      new generation.
                    </p>
                    <p className="pageContent">
                      {" "}
                      MITHRA RESORTS & CLUB sprawled over 9 acres , with
                      eco-friently environment it has a wide variety range of
                      option to facilitute you and your family .MITHRA RESORTS &
                      CLUB situated very near from heart of the city.{" "}
                    </p>
                    <p className="pageContent caption">
                      Join us for enjoying exclusive club class privileges and
                      creating excitement round the year.
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td valign="top" className="imgPadding">
                  <table width="100%" cellSpacing="0" cellPadding="5">
                    <tr>
                      <td width="32%" height="110">
                        <div className="nare" style={{ textAlign: "center", width: "200", height: "96" }}>
                          <img
                            src={img1}
                            alt="logo"
                          
                          />
                        </div>
                      </td>
                      <td width="36%">
                        <div style={{ textAlign: "center",width:"200",height:"96" }}>
                          <img
                            src={img2}
                            
                          />
                        </div>
                      </td>
                      <td width="32%">
                        <div style={{ textAlign: "center",width:"200",height:"96" }}>
                          <img
                            src={img3}
                           
                          />
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </div>
      <Footer />
    </>
  );
}
