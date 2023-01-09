import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
// import { Link } from 'react-router-dom';
import { useUserContext } from "../../data/providers/users/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ErrorMessage } from "@hookform/error-message"

export default function Forgetpassword() {
  const { resetPassword} = useUserContext();
 
  

  type UserSubmitForm = {
    email: string;
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = (data: UserSubmitForm) => {
    resetPassword(data.email).then((result) => {
      if (result.success) {
        console.log("Login Sucess", result);
      } else {
        console.log("Login failed", result);
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
          <Card.Header className="m-0">
          <h3>Find Your Account</h3>
          </Card.Header>
        <Card.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Please enter your email address or mobile number to search for your account.</Form.Label>
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
      </Form>
        </Card.Body>
      <Card.Footer className=" d-flex justify-content-end  ">
      {/* <Button   className="m-2" variant="secondary" type="submit"><Link to={'/login'}>Cancel</Link>  
      </Button> */}
      <Button  
      className="m-2"
       variant="primary" 
       type="submit"
       onClick={handleSubmit(onSubmit)}
        >
        Submit
      </Button>
      </Card.Footer>
        </Card>
    </div>
  )
}
