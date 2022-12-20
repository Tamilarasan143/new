import React from 'react'
import Header from '../components/header/header'
import NoTransitionExample from './homepage/carcoual'
import Footer from '../components/footer/footer'
import '../components/header/home.css'

export default function EnquriyPage() {
  return (
    <>
      <Header />
      <NoTransitionExample />
      {/* <div>
        <tr>
          <td height="337" valign="top" style={{ backgroundColor: "#FFFFFF" }}>
            <table width="100%" cellSpacing="0" cellPadding="0">
              <tr>
                <td width="32%" valign="bottom"><img src="assets/images/enquiry.gif" width="234" height="350" /></td>
                <td width="3%">&nbsp;</td>
                <td width="65%">
                  <form action="postenquiry" method="post" onsubmit="return checkForm(this);" name='TheForm' id="TheForm">
                    <b>
                      <table width="95%" border="0" align="center" cellpadding="3" cellspacing="0" className="pageContent">
                        <tbody>
                          <tr style={{ textAlign: "left" }} valign="top">
                            <td height="28" colSpan={3} valign="middle"></td>
                          </tr>
                          <tr style={{ textAlign: "left" }} valign="top">
                            <td className="for1" width="22%" height="30">
                              <strong>Name </strong>
                              <font style={{ color: '#cc3300' }}>*</font>
                            </td>
                            <td colSpan={2} height="30"><font face="Arial, Helvetica, sans-serif" size="2">
                              <input name="txtfname" className="forb" id="txtfname" size="35" type="text" />
                            </font>
                            </td>
                          </tr>
                          <tr style={{ textAlign: "left" }} valign="top">
                            <td className="for1" width="22%" height="30">
                              <strong>Email</strong>
                              <font color="#cc3300">*</font>
                            </td>
                            <td colSpan={2} className="for1" height="30">
                              <input name="txtemail" type="text" className="forb" id="txtemail" size="35" />
                            </td>
                          </tr>
                          <tr style={{ textAlign: "left" }} valign="top">
                            <td width="22%" height="30">
                              <span className="for1">
                                <strong>Mobile</strong>
                              </span>
                              <font color="#cc3300">*</font>

                            </td>
                            <td colSpan={2} height="30"><font face="Arial, Helvetica, sans-serif" size="2">
                              <input name="mobile" className="forb" id="mobile" size="35" />
                            </font>
                            </td>
                          </tr>
                          <tr style={{ textAlign: "left" }} valign="top">
                            <td className="for1" height="30">
                              <strong>Enquiry Type </strong>
                              <font color="#cc3300">*</font>

                            </td>
                            <td colSpan={2} height="30">
                              <select name="booking_type">
                                <option value="Room">Room</option>
                                <option value="Conference Hall">Conference Hall</option>
                                <option value="Party Hall">Party Hall</option>
                                <option value="Birthday party">Birthday party</option>
                                <option value="Business Meeting">Business Meeting</option>
                                <option value="Team Outing">Team Out</option>
                                <option value="Other">Other </option>
                              </select>
                            </td>
                          </tr>
                          <tr style={{ textAlign: "left" }} valign="top">
                            <td width="22%" height="26">
                              <span className="for1"><strong>Comments</strong></span>
                            </td>
                            <td colSpan={2} height="26">
                              <font face="Arial, Helvetica, sans-serif" size="2">
                                <textarea name="comments" className="forb" id="comments" size="35" cols="60" rows="5">
                                </textarea>
                              </font>
                            </td>
                          </tr>


                          <tr valign="top" style={{ textAlign: "left" }}>
                            <td height="41">&nbsp;</td>
                            <td width="24%" height="41">
                              <input type="submit" name="Submit" id="Submit" value="Submit" />
                            </td>
                            <td width="54%">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </b>
                  </form>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </div> */}
      <Footer />
    </>
  )
}
