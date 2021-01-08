import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Container,Row,Col,Form,Card,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/login.css'

function LoginForm({handleLoginstate}) {

    const [userName, setUserName]=useState(''),
    [alert, setAlert] = useState(''),
    [password,setPassword] =useState(''),history =useHistory()
  
    function handleName(e){
        setUserName(e.target.value)
    }

    function handlePassword (e){
        setPassword(e.target.value)
    }

  
    function handleLoginClick(e){
        e.preventDefault()
        let users = JSON.parse(localStorage.getItem('users'))
         if(users !==null){
             let user =users[userName]
            if (user && user.password===password){
                // handleLoginstate(true, user)
                history.push('/home')
            }
            else
               setAlert('Wrong user name or password') 
         }
         else
            setAlert('Unknown user..Signup')
        }

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
                                    <Form.Control className ='form-control' type="text" placeholder="Enter username" value = {userName} onChange={handleName}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className ='form-control' type="password" placeholder=" Enter Password" value={password} onChange={handlePassword} />
                                </Form.Group>

                                <div className='btn-div'>
                                <Button className='btn' variant="primary" onClick={handleLoginClick}><a id='a' href='/home'>Login</a></Button>
                                </div>
                            </Form>
                            <p>Are you new here?<a href='/signup'>Signup</a></p>
                        </Card>
                        <div>
                            <span>{alert}</span>
                        </div>
                      </Col>

                    </Row>
                </Container>
                  
            </div>
        </div>
    )
}

export default LoginForm
