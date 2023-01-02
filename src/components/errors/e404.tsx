import { Fragment } from "react";
import { Container, Figure, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Fragment>
      <div className="page-wrapper">
        <div className="error-wrapper">
          <Container>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                className="img-100"
                src={"sad"}
                alt=""
              />
            </Figure>
            <div className="error-heading">
              <h2 className="headline font-danger">{"404"}</h2>
            </div>
            <Col md={{ span: 8, offset: 2 }}>
              <p className="sub-content">
                {
                  "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved."
                }
              </p>
            </Col>
            <Link to={`${process.env.PUBLIC_URL}/dashboard/default/`}>
              <Button color="danger-gradien" size="lg">
                BACK TO HOME PAGE
              </Button>
            </Link>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};
export default Error404;
