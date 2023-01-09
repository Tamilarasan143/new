import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ErrorMessage } from "@hookform/error-message"
import { Link, useLocation, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CircleAvatar from "../../components/circleavatar/circleAvatar";

import { useUserContext } from "../../data/providers/users/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Alert } from "react-bootstrap";


export default function LoginPage() {

  const { login } = useUserContext();
  const location = useLocation();
  const navigate = useNavigate();
  const locState: any = location.state;
  const from = locState ? locState.from?.pathname || "/acc" : "/acc";


  type UserSubmitForm = {
    email: string;
    password: string;
    serverError?:string;
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
  });
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = (data: UserSubmitForm) => {
    login(data.email, data.password).then((result) => {
      if (result.success) {
        console.log("Login Sucess", result);

        navigate(from, { replace: true });
      } else {
        // Show failure error codes
        console.log("Login failed", result);
        setError("serverError", { type: "server", message: result.errorCode + ":" + result.errorMessage })
      }
    })
    
    console.log("data", data)
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
      <Card style={{ width: "22rem" }}>
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

            <h3>Sign in</h3>
            <ErrorMessage
											errors={errors}
											name="serverError"
											render={({ message }) => <Alert variant="danger">{message}</Alert>}
										/>
            <Form >
              <Form.Group className="mb-4 form-group" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email Address*"
                  {...register('email')}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                 
                />
                {/* <div className="invalid-feedback">{errors.email?.message}</div> */}
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

              <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password*"
                 
                  {...register('password')}
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                />
                {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
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
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  style={{ textAlign: "left" }}
                />
              </Form.Group>

              <Button
                className="mb-3 form-group"
                variant="primary"
                type="submit"
               
                onClick={handleSubmit(onSubmit)}
                style={{ fontSize: "12px", width: "320px", textAlign: "center" }}
              >
                SIGN IN
              </Button>
            </Form>
            <Container>
              <Row>
                <Col sm={4}>
                  <Link
                    to={"/forgetpassword"}
                    style={{ textAlign: "left", fontSize: "10px" }}
                  >
                    Forgot Password?
                  </Link>
                </Col>
                <Col sm={8}>
                  <Link
                    to={"/register"}
                    style={{ textAlign: "center", fontSize: "10px" }}
                  >
                    Don't have an account? Sign Up
                  </Link>
                </Col>
              </Row>
            </Container>
            <br></br>
            <br></br>
            <div style={{ textAlign: "center" }} className="copyright">
             © Mithra Resorts & Club, All Right Reserved.
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
