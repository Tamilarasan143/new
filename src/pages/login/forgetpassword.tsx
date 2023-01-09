import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../../data/providers/users/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ErrorMessage } from "@hookform/error-message"
import { Alert } from 'react-bootstrap';

export default function Forgetpassword() {
  const { resetPassword} = useUserContext();
  const location = useLocation();
  const navigate = useNavigate();
  const locState: any = location.state;
  const from = locState ? locState.from?.pathname || "/login" : "/login";
  

  type UserSubmitForm = {
    email: string;
    serverError: string;
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
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
    resetPassword(data.email).then((result) => {
      if (result.success) {
        console.log("Login Sucess", result);
        navigate(from, { replace: true });
      } else {
        console.log("Login failed", result);
        setError("serverError", { type: "server", message: result.errorCode + ":" + result.errorMessage })
      }
    })
    console.log("data", data)
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
        <Card style={{ width: "34rem" }}>
          <Card.Header className="m-0 d-flex justify-content-center">
          <h3>Reset Password</h3>
          </Card.Header>
        <Card.Body>
        <ErrorMessage
											errors={errors}
											name="serverError"
											render={({ message }) => <Alert variant="danger">{message}</Alert>}
										/>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Please enter your email address and we'll send a link to reset your password.</Form.Label>
        <Form.Control
                  type="email"
                  placeholder="Email Address*"
                  {...register('email')}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                 
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
      <div className=" d-flex justify-content-end " >
      <Button
        
       variant="primary" 
       type="submit"
       onClick={handleSubmit(onSubmit)}
        >
        Reset
      </Button>
      </div>
      </Form>
        </Card.Body>
      <Card.Footer className=" m-0 d-flex justify-content-center text-decoration-none ">
      <Link className="text-decoration-none " to={'/login'}><h5>Back to Sign In</h5></Link>
      </Card.Footer>
        </Card>
    </div>
  )
}
