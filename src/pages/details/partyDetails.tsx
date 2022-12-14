import React, { useState } from "react";
import party1 from "../../assets/images/partyhall/party1.jpeg";
import party2 from "../../assets/images/partyhall/party2.jpeg";
import party3 from "../../assets/images/partyhall/party3.jpeg";
import party4 from "../../assets/images/partyhall/party4.jpeg";
import party5 from "../../assets/images/partyhall/party5.jpeg";
import party6 from "../../assets/images/partyhall/party6.jpeg";
import party7 from "../../assets/images/partyhall/party7.jpeg";
import party8 from "../../assets/images/partyhall/party8.jpeg";
import party9 from "../../assets/images/partyhall/party2.jpeg";
import { Container, Modal, Row } from "react-bootstrap";
import Header from "../homepage/header/header";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/esm/Col";
import ImgGallery from "../../components/imgGallery/imgGallery";
import ImagePreview from "../../components/imgPreview/imagePreview";
import Footer from "../homepage/footer/footer";

const images = [
  party1,
  party2,
  party3,
  party4,
  party5,
  party6,
  party7,
  party8,
  party9,
];

export default function PartyDetails() {
  const [show, setShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Container>
      <Header />
      <Container>
        <div
          className="row mt-5"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="col-lg-4">
            <Image
              className="rounded-circle"
              width="140"
              height="140"
              src={party1}
            ></Image>
            <h2>Party Hall</h2>
            <p>
              A Party hall, function hall, or reception hall, is a special
              purpose room, or a building, used for hosting large social and
              business events.
            </p>
          </div>
        </div>
        <Row>
          <Col>
            <ImgGallery
              data={images}
              onItemClick={(index: any) => {
                /// alert("Index .... " + index);
                setSelectedIndex(index);
                setShow(true);
              }}
            />
          </Col>
        </Row>

        <ImagePreview
          data={images}
          selectedItemIndex={selectedIndex}
          show={show}
          setShow={setShow}
        />
      </Container>

      <Footer />
    </Container>
  );
}
