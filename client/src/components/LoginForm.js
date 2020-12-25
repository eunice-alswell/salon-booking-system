import React from 'react'
import { Container,Row,Col,Form,Card,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/login.css'

function LoginForm() {
    return (
        <div className = 'bg'>
            <div className = 'login'>
                <Container fluid className = 'container'>
                    <Row >
                      <Col xs={12} className = 'col'>
                        <Card xs ={12} className='card'>
                            <Form>
                                <h1>Welcome!</h1>
                                <p>login here</p>
                                <Form.Group controlId="formBasicusername">
                                    <Form.Label>username</Form.Label>
                                    <Form.Control className ='form-control' type="text" placeholder="Enter username" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className ='form-control' type="password" placeholder=" Enter Password" />
                                </Form.Group>

                                <div className='btn-div'>
                                <Button className='btn' variant="primary"><a id='a' href='/home'>Login</a></Button>
                                </div>
                            </Form>
                            <p>Are you new here?<a href='/'>Login</a></p>
                        </Card>
                      </Col>
                    </Row>
                </Container>  
            </div>
        </div>
    )
}

export default LoginForm
