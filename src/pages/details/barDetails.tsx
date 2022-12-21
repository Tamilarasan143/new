import React, { useState } from "react";
import ImageGallery from 'react-image-gallery';
import bar1 from '../../assets/images/bar/bar1.jpeg'
import bar2 from '../../assets/images/bar/bar2.jpeg'
import bar3 from '../../assets/images/bar/bar3.jpeg'
import bar4 from '../../assets/images/bar/bar4.jpeg'
import bar5 from '../../assets/images/bar/bar5.jpeg'
import bar6 from '../../assets/images/bar/bar6.jpeg'
import bar7 from '../../assets/images/bar/bar1.jpeg'
import bar8 from '../../assets/images/bar/bar2.jpeg'
import bar9 from '../../assets/images/bar/bar1.jpeg'
import { Container, Modal, Row } from "react-bootstrap";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/esm/Col";
import ImgGallery from "../../components/imgGallery/imgGallery";
import ImagePreview from "../../components/imgPreview/imagePreview";


const images = [
    bar1,
    bar2,
    bar3,
    bar4,
    bar5,
    bar6,
    bar7,
    bar8,
    bar9,
]

export default function BarDetails() {
    const [show, setShow] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
  
    return (
      <Container>
        <Header />
        <Container>
          <div className="row mt-5" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div className="col-lg-4">
              <Image
                className="rounded-circle"
                width="140"
                height="140"
                src={bar1}
              ></Image>
              <h2>Bar and restaurant</h2>
              <p>
              The emotions you want to inspire in your customers. “Happy” is not enough. Think about the most popular restaurants.
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
  