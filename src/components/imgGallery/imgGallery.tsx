import { Row, Col, Container } from "react-bootstrap";

export interface Props {
  data: Array<String>;
  onItemClick: any;
}

export default function ImgGallery(prop: Props) {
  return (
    <>
      <Container>
        <Row>
          {prop.data &&
            prop.data.map((imgUrl: any, index: any) => {
              return (
                <Col
                  key={index}
                  onClick={() => prop.onItemClick(index)}
                  xs={2}
                  md={4}
                  lg={4}
                
                >
                  <img src={imgUrl} alt="" height={300} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
}
