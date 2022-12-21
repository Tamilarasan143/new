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
          <table width={"400"}>
            <tr>
              <td height={"30"}>Name</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td height={"30"}>Email</td>
              <td>
                <input type="email" />
              </td>
            </tr>
            <tr>
              <td height={"30"}>Mobile</td>
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
                  <option>Other</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <td height={"30"}>Commends</td>
                <td>
                  <textarea name=" commends"></textarea>
                </td>
              </td>
            </tr>
            <tr>
              <td height={"50"} align="center"></td>
              <td>
                <input type="button" value={"Submite"} />
              </td>
            </tr>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
