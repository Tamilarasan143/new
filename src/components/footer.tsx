import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <div className='Foot'>
         <footer>
              <tr>
                <td valign="top" style={{backgroundColor:"#1669a9",height:"114"}} className="ftbrd">
                    <table  style={{textAlign:"center",width:"100%"}} cellPadding="5" cellSpacing="0" className="toplink">
                        <tr>
                            <td colSpan={2}> </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <div style={{textAlign:"center"}}><a href="index.html">Home</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="aboutus.html">About Us</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Promoters</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="facilities">Facilities</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Location</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Clubmail</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Facilities Tariff&nbsp;</a>&nbsp;|&nbsp;&nbsp;<a href="#">Affiliation</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Membership Tariff</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Membership Form</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Events</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <div style={{textAlign:"center"}}><a href="#">Swimming Pool</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Gym</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Yoga &amp; Meditation Center</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Naturopathic Massage</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Indoor Games</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Outdoor Games</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Children's Tot lot</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Open Air Theater</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <div style={{textAlign:"center"}}><a href="#">Conference Hall</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Multi cuisine Restaurant</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Bar</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Guest Rooms</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Special Coaching Camps</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="enquiry">Enquiry</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="contactus">Contact us</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Sitemap</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td width="46%" className="pageContent">
                                <div style={{textAlign:"left"}} className="copyright">Copyright@2022, Allrights reserved Mithra</div>
                            </td>
                            <td width="54%" className="pageContent">
                                <div style={{textAlign:"right"}} className="copyright">Web Designed and Maintained by Jsoft</div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
  </footer>
 </div>
  )
}