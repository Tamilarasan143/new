import Header from "../components/header/header";
import ImageSlider from "./homepage/slider";
import Footer from "../components/footer/footer";
import { Button, Container, Figure, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import con1 from "../assets/images/enquiry.gif";

export default function EnquriyPage() {
  return (
    <>
      <Header />
      <ImageSlider />
      <Container>
        <Row>
          <Col style={{ border: "", backgroundColor: "white" }} sm={4}>
            <Figure>
              <Figure.Image width={280} height={500} alt="171x200" src={con1} />
            </Figure>
          </Col>
          <div style={{ backgroundColor: "white", width: "55.5vw" }}>
            <div style={{ marginTop: "10%" }}>
              Name*
              <input style={{ marginLeft: "9%" }} type={"Name"} required />
            </div>
            <div style={{ marginTop: "2%" }}>
              Email*
              <input style={{ marginLeft: "9.5%" }} type={"Email"} required />
            </div>
            <div style={{ marginTop: "2%" }}>
              Mobile
              <input style={{ marginLeft: "9%" }} type={"Mobile"} required />
            </div>
            <div style={{ marginTop: "2%", justifyContent: "center" }}>
              Enquriy Type*
              <select style={{ marginLeft: "9%" }} value="Choose...">
                <option>Choose...</option>
                <option>Room</option>
                <option>Conference Hall</option>
                <option>Party Hall</option>
                <option>Birthday party</option>
                <option>Business Party</option>
                <option>Team Out</option>
                <option>Other</option>
              </select>
            </div>
            <div style={{ marginTop: "2%" }}>
              Comments*
              <textarea
                rows={4}
                cols={23}
                style={{ marginLeft: "5%" }}
                required
              />
            </div>
            <Button>Submit</Button>
          </div>

          {/* <Col sm={8}>
            <Row style={{ border: "", backgroundColor: "white" }}>
              <Col style={{ border: "" }}>
                <Form.Group className="mb-2" as={Row}>
                 <Form.Label>Name*</Form.Label> 
                  <Form.Control type="Name" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  as={Col}
                  controlId="formGridPassword"
                >
                  <Form.Label>Email*</Form.Label>
                  <Form.Control type="Email" />
                </Form.Group>
                <Form.Group className="mb-3" as={Col}>
                  <Form.Label>Mobile*</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>EnquriyPage*</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Room</option>
                    <option>Conference Hall</option>
                    <option>Party Hall</option>
                    <option>Birthday party</option>
                    <option>Business Party</option>
                    <option>Team Out</option>
                    <option>Other</option>
                  </Form.Select>
                </Form.Group>

                <FloatingLabel label="Comments">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>

                <div className="col-lg6 col-md-6 col-12 py-lg-2 py-3">
                  <Button className="btn btn-primary">Submit</Button>
                </div>
              </Col>
            </Row>
          </Col> */}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
