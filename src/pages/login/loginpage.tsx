import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../services/firebasesignin';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CircleAvatar from '../../components/circleavatar/circleAvatar';
import React from 'react';




export default function LoginPage() {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const signin = () =>{
createUserWithEmailAndPassword(auth, email, password)
  
}
  
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // marginTop: "15%",
      width:"1000",
      height:"100vh",
      backgroundColor:"white"

    }}>
    
      <Card style={{ width: '22rem' }}> 
      <Card.Body>
    <Form>
      <Row>
    <Col className="d-flex justify-content-center" md={{ span: 6, offset: 3 }}>
    <CircleAvatar><FontAwesomeIcon  icon={faLock} /></CircleAvatar>
    </Col>
    </Row>
    
       <h3>Sign in</h3>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Email Address*" 
         onChange={(event) => {
          setEmail(event.target.value);
         }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password*"
         onChange={(event) => {
          setPassword(event.target.value);
         }}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" style={{textAlign:"left"}}/>
      </Form.Group>
      <Button  className="mb-3" variant="primary" type="submit" onClick={signin} style={{fontSize:"12px",width:"320px",textAlign:"center"}}>
        SIGN IN
      </Button>
      <Container>
      <Row>
      <Col sm={4}><Link to={'#'} style={{textAlign:"left",fontSize:"10px"}}>Forgot Password?</Link></Col>
      <Col sm={8}><Link to={'/register'} style={{textAlign:"center",fontSize:"10px"}}>Don't have an account? Sign Up</Link></Col>
      </Row>
      </Container>
      <br></br>
      <br></br>
      <div style={{textAlign:"center"}} className="copyright">Copyright@2022, Allrights reserved Mithra</div>
    </Form>
    </Card.Body>
    </Card>
    </div>
  );
}

 