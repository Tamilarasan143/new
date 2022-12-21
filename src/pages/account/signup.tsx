import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        
            }}>
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="first name" placeholder="first name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="lastname" placeholder="Surname" />
                </Form.Group>
            </Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                 <Form.Group className="mb-3" id="formGridCheckbox">
                 <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
               </Button>
               <Link to={'myacc'}>Already have an account? Sign in</Link>
        </Form>
        </div>
    );
}

export default Signup;