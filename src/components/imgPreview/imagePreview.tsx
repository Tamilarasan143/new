import React from "react";
import { Modal } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
export interface Props {
  data: Array<string>;
  selectedItemIndex: number;
  show: boolean;
  setShow: any;
}

export default function ImagePreview(prop: Props) {
  const images: Array<any> = [];
  prop.data.map((item) => images.push({ original: item, thumbnail: item }));

  return (
    <Modal
      show={prop.show}
      fullscreen={true}
      onHide={() => prop.setShow(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ImageGallery items={images} />
      </Modal.Body>
    </Modal>
  );
}
