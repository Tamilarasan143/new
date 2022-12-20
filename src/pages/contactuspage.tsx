import React from "react";
import Header from "../components/header/header";
import NoTransitionExample from "./homepage/carcoual";
import Footer from "../components/footer/footer";
import con1 from "../assets/images/contactus.gif"

export default function ContactPage() {
  return (
    <>
      <Header />
      <NoTransitionExample />

      <tr>
        <td>
          <div id="fadeshow1"></div>
        </td>
      </tr>
      <tr>
        <td height="337" valign="top" style={{ backgroundColor: "#FFFFFF" }}>
          <table width="100%" cellSpacing="0" cellPadding="0">
            <tr>
              <td width="31%" height="357">
                <img
                  src={con1}
                  width="234"
                  height="350"
                />
              </td>
              <td width="69%">
                <table width="94%" cellSpacing="0" cellPadding="3">
                  <tr>
                    <td height="351" valign="top">
                      <div className="padding">
                        <div className="pageTitle">Contact Us</div>
                        <h2 className="style2">
                          Mithra{" "}
                          <span className="style3">Resorts &amp; Club</span>{" "}
                          <span className="style4">Private Limited</span>
                        </h2>
                        <p className="style5">#286,Anna pathai,</p>
                        <p className="style5">Vaikkalpalam,</p>
                        <p className="style5">Perur main Road,</p>
                        <p className="style5">Coimbatore - 641 010.</p>
                        <p className="style5">&nbsp;</p>
                        <p className="style5">Tel : 0422 - 2340029</p>
                        <p className="style5">Mob : +91 - 8870228702</p>
                        <p className="style5">Mob : +91 - 8870608706</p>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td className="ftbrd">
          <table
            width="99%"
            align="center"
            cellPadding="5"
            cellSpacing="0"
            className="toplink"
          >
            <tr>
              <td colSpan={2}> </td>
            </tr>
          </table>
        </td>
      </tr>

      <Footer />
    </>
  );
}
