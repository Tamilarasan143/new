import Button from 'react-bootstrap/Button';
import React from 'react';
import Form from 'react-bootstrap/Form';

import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircleAvatar from '../../components/circleavatar/circleAvatar';


function Signup() {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // marginTop: "15%",
            width: "1000",
            height: "100vh",
            backgroundColor: "white"
        }}>
            <Card style={{ width: '24rem' }}>
                <Card.Body>
                    <Form>
                        <Row>
                            <Col className="d-flex justify-content-center" md={{ span: 6, offset: 3 }}>
                                <CircleAvatar><FontAwesomeIcon icon={faLock} /></CircleAvatar>
                            </Col>
                        </Row>
                        <h3>Sign Up</h3>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="name" placeholder="First Name*" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="lastname" placeholder="Last Name*" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="formGridEmail">
                            <Form.Control type="email" placeholder="Email Address*" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridPassword">
                            <Form.Control type="password" placeholder="Password*" />
                        </Form.Group>
                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="I agree to terms & conditions." style={{ textAlign: "left" }} />
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{ fontSize: "12px", width: "350px" }}>
                            SIGN UP
                        </Button>

                        <Container>
                            <Row>
                                <Col></Col>
                                <Col><Link to={'/login'} style={{ textAlign: "right", fontSize: "10px" }}>Already have an account? Sign in</Link></Col>
                            </Row>
                        </Container>
                        <br></br>
                        <br></br>
                        <div style={{ textAlign: "center" }} className="copyright">Copyright@2022, Allrights reserved Mithra</div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Signup;