import Button from "react-bootstrap/Button";
import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircleAvatar from "../../components/circleavatar/circleAvatar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ErrorMessage } from "@hookform/error-message";

function Signup() {
  type UserSubmitForm = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    acceptTerms: boolean;
  };
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("Firstname is required"),
    lastname: Yup.string()
      .required("Lastname is required")
      .min(4, "Lastname must be at least 6 characters")
      .max(10, "Lastname must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must not exceed 40 characters"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // marginTop: "15%",
        width: "1000",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <Card style={{ width: "24rem" }}>
        <Card.Body>
          <Form>
            <Row>
              <Col
                className="d-flex justify-content-center"
                md={{ span: 6, offset: 3 }}
              >
                <CircleAvatar>
                  <FontAwesomeIcon icon={faLock} />
                </CircleAvatar>
              </Col>
            </Row>
            <h3>Sign Up</h3>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  type="name"
                  placeholder="First Name*"
                  {...register("firstname")}
                  className={`form-control ${
                    errors.firstname ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  errors={errors}
                  name="firstname"
                  render={({ message }) => (
                    <Form.Control.Feedback type="invalid">
                      {message}
                    </Form.Control.Feedback>
                  )}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control
                  type="lastname"
                  placeholder="Last Name*"
                  {...register("lastname")}
                  className={`form-control ${
                    errors.lastname ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  errors={errors}
                  name="lastname"
                  render={({ message }) => (
                    <Form.Control.Feedback type="invalid">
                      {message}
                    </Form.Control.Feedback>
                  )}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridEmail">
              <Form.Control
                type="email"
                placeholder="Email Address*"
                {...register("email")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <Form.Control.Feedback type="invalid">
                    {message}
                  </Form.Control.Feedback>
                )}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridPassword">
              <Form.Control
                type="password"
                placeholder="Password*"
                {...register("password")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <Form.Control.Feedback type="invalid">
                    {message}
                  </Form.Control.Feedback>
                )}
              />
            </Form.Group>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="I agree to terms & conditions."
                {...register("acceptTerms")}
                className={` ${
                  errors.acceptTerms ? "is-invalid" : ""
                }`}
                style={{ textAlign: "left" }}
              />
              <ErrorMessage
                errors={errors}
                name="acceptTerms"
                render={({ message }) => (
                  <Form.Control.Feedback type="invalid">
                    {message}
                  </Form.Control.Feedback>
                )}
              />
            </Form.Group>
            <Button
              onClick={handleSubmit(onSubmit)}
              variant="primary"
              type="submit"
              style={{ fontSize: "12px", width: "350px" }}
            >
              SIGN UP
            </Button>

            <Container>
              <Row>
                <Col></Col>
                <Col>
                  <Link
                    to={"/login"}
                    style={{ textAlign: "right", fontSize: "10px" }}
                  >
                    Already have an account? Sign in
                  </Link>
                </Col>
              </Row>
            </Container>
            <br></br>
            <br></br>
            <div style={{ textAlign: "center" }} className="copyright">
              Copyright@2022, Allrights reserved Mithra
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Signup;
