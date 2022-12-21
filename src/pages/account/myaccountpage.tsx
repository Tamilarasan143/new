import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../services/firebasesignin';
import { Link } from 'react-router-dom';

export default function MyaccountPage() {
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
      marginTop: "15%"

    }}>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Enter email" 
         onChange={(event) => {
          setEmail(event.target.value);
         }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password"
         onChange={(event) => {
          setPassword(event.target.value);
         }}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={signin}>
        Submit
      </Button><br></br>
      <Link to={'singup'}>Don't have an account? Sign Up</Link>
    </Form>
    </div>
  );
}

 