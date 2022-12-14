import React, { useState } from "react";
import spa1 from "../../assets/images/spa/spa1.jpeg";
import spa2 from "../../assets/images/spa/spa2.jpeg";
import spa3 from "../../assets/images/spa/spa1.jpeg";
import spa4 from "../../assets/images/spa/spa4.jpeg";
import spa5 from "../../assets/images/spa/spa5.jpeg";
import spa6 from "../../assets/images/spa/spa6.jpeg";
import spa7 from "../../assets/images/spa/spa7.jpeg";
import spa8 from "../../assets/images/spa/spa2.jpeg";
import { Container, Modal, Row } from "react-bootstrap";
import Header from "../homepage/header/header";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/esm/Col";
import ImgGallery from "../../components/imgGallery/imgGallery";
import ImagePreview from "../../components/imgPreview/imagePreview";
import Footer from "../homepage/footer/footer";

const images = [spa1, spa2, spa3, spa4, spa5, spa6, spa7, spa7, spa8];

export default function SpaDetails() {
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
              src={spa1}
            ></Image>
            <h2>Spa</h2>
            <p>
              Our first group revolves around the idea of relaxation, with “It"s
              time to relax!”.
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
