import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'


function Signup() {
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
        <Form>
        <Image className='rounded-circle' width="35" height="35" src={"data:image/png;base64,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"}></Image>
                <h3>Sign Up</h3>
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
                 <Form.Check type="checkbox" label="Check me out" style={{textAlign:"left"}}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
               </Button>
               <br></br>
               <Link to={'/myacc'}style={{textAlign:"left",fontSize:"12px"}}>Already have an account? Sign in</Link>
               <br></br>
               <br></br>
               <div style={{textAlign:"center"}} className="copyright">Copyright@2022, Allrights reserved Mithra</div>
        </Form>
        </div>
    );
}

export default Signup;