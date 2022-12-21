import Header from "../components/header/header";
import NoTransitionExample from "./homepage/carcoual";
import Footer from "../components/footer/footer";



export default function EnquriyPage() {
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
      
        <div>
          <table >
            <tr>
              <td >Name</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td >Email</td>
              <td>
                <input type="email" />
              </td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td>
                <input type="Moble" />
              </td>
            </tr>
            <tr>
              <td>Enquiry Type</td>
              <td>
                <select>
                  <option>Room</option>
                  <option>Conference Hall</option>
                  <option>Party Hall</option>
                  <option>Business Meeting</option>
                  <option>Birthday Hall</option>
                  <option>Others</option>
                </select>
              </td>
            </tr>
            <div>
            <tr>
              <td>
                <td >Comments</td>
                <td>
                  <textarea name=" comments"></textarea>
                </td>
              </td>
            </tr>
            </div>
            <tr>
              <td style={{textAlign:'center'}}></td>
              <td>
                <input type="button" value={"Submit"} />
              </td>
            </tr>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
