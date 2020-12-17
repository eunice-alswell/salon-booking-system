import React from 'react'
import { Container,Row,Col,Form,Card,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/signup.css'

function SignupForm() {
    return (
        <div>
            <div className = 'signup'>
                <Container fluid className = 'container'>
                    <Row >
                      <Col xs={12} className = 'col'>
                        <Card xs ={12} className='card'>
                            <Form>
                                <h1>Signup</h1>
                                <Row>
                                    <Col>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                </Row>
                                <Form.Control className ='form-control' placeholder="username" />

                                <Form.Control className ='form-control' type="email" placeholder="Enter email" />

                                <input type="tel" id="phone" name="phone" placeholder="phone number" required/>

                                <Form.Control className ='form-control' type="password" placeholder="Password" />
                                <div className='btn-div'>
                                <Button className='btn' variant="primary">Signup</Button>
                                </div>
                            </Form>
                            <p>Already have an account?<a href='/'>Login</a></p>
                        </Card>
                      </Col>
                    </Row>
                </Container>  
            </div>
        </div>
    )
}

export default SignupForm
