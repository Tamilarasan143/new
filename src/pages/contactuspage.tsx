import Header from "../components/header/header";
import ImageSlider from "./homepage/slider";
import Footer from "../components/footer/footer";
import { Button, Col, Container, Figure, Row } from "react-bootstrap";
import con1 from "../assets/images/contactus.gif";
import React from "react";

export default function ContactPage() {
  return (
    <>
      <Header />
      <ImageSlider />
      <Container>
        <Row>
          <Col
            style={{ border: "", backgroundColor: "white", textAlign: "left" }}
            sm={4}
          >
            <Figure>
              <Figure.Image width={290} height={500} alt="171x200" src={con1} />
            </Figure>
          </Col>
          <Col sm={8}>
            <Row style={{ border: "", backgroundColor: "white" }}>
              <Col>
                <div style={{ alignItems: "left" }}>
                  <div>
                    <h3
                      style={{
                        textAlign: "left",
                        marginTop: "5%",
                        color: "#42AAF0",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      Contact Us
                    </h3>
                  </div>

                  <div>
                    <h2
                      style={{
                        textAlign: "left",
                        fontFamily: "Trebuchet MS",
                        marginBlockStart: "0.83em",
                        marginBlockEnd: "0.83em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                      }}
                    >
                      <span
                        style={{
                          color: "#CC3300",
                          fontWeight: "bold",
                          fontSize: "1em",
                        }}
                      >
                        Mithra
                      </span>{" "}
                      <span
                        style={{
                          color: "#0066CC",
                          fontWeight: "bold",
                          fontSize: "1em",
                        }}
                      >
                        Resorts & Club
                      </span>{" "}
                      <span
                        style={{
                          color: "#666666",
                          fontWeight: "bold",
                          fontSize: "1em",
                        }}
                      >
                        Private Limited
                      </span>
                    </h2>
                  </div>

                  <div>
                    <h6 style={{ textAlign: "left", color: "#333333" }}>
                      <p>
                        #286,Anna pathai,
                        <br />
                        <br />
                        Vaikkalpalam,
                        <br />
                        <br />
                        Perur main Road,
                        <br />
                        <br />
                        Coimbatore - 641 010
                      </p>
                    </h6>
                  </div>
                  <br />

                  <div>
                    <h6
                      style={{
                        textAlign: "left",
                        color: "#333333",
                        fontFamily: "Trebuchet MS",
                      }}
                    >
                      <br />
                      Tel : 0422 - 2340029
                      <br />
                      <br />
                      Mob : +91 - 8870228702
                      <br />
                      <br />
                      Mob : +91 - 8870608706
                      <br />
                      <br />
                    </h6>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
