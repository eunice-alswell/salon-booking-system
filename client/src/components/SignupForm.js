import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Container,Row,Col,Form,Card,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/signup.css'

function SignupForm() {

    const [firstname, setFirstname] = useState(''),[email, setEmail] = useState(''),[password, setPassword] = useState(''),[lastname, setLastname] = useState(''),[userName, setUsername] = useState(''),[phone, setPhone] = useState(''),
    [msg, setMsg] = useState(''),history=useHistory();

   function handleFirstname(e){
      setFirstname(e.target.value)  
     
   }
   function handleLastname(e){
      setLastname(e.target.value)
   }

   function handlePhone(e){
      setPhone(e.target.value)  
     
   }
   function handleUsername(e){
      setUsername(e.target.value)  
     
   }

   function handleEmail(e){
    setEmail(e.target.value)  
   }

   function handlePassword(e){
    setPassword(e.target.value)  
   }
   function handleMsg(){
    return msg
   }


   const onSignUp=(e)=>{
       e.preventDefault()
        if(userName && email && password){
            let thisUser= {firstname,lastname,userName,phone,email,password},
           usersJSON = localStorage.getItem('users'),
           users= usersJSON ? JSON.parse(usersJSON) : {}

        //    !users && users={}
            users[userName]=thisUser;
            localStorage.setItem('users', JSON.stringify(users))
            setMsg('Successfully Signed up..You will be redirected to login page')
            setTimeout(()=>{
               
                history.push('/login')
            },3000)

        }else{
           setMsg('Invalid input')
        }
   }

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
                                        <Form.Control placeholder="First name" value = {firstname} onChange={handleFirstname} />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Last name" value = {lastname} onChange={handleLastname} />
                                    </Col>
                                </Row>
                                <Form.Control className ='form-control' placeholder="username" value = {userName} onChange = {handleUsername} />

                                <Form.Control className ='form-control' type="email" placeholder="Enter email" value = {email} onChange = {handleEmail} />

                                <input type="tel" id="phone" name="phone" placeholder="phone number" required value = {phone} onChange = {handlePhone}/>

                                <Form.Control className ='form-control' type="password" placeholder="Password" value = {password} onChange = {handlePassword}/>
                                <div className='btn-div'>
                                    <Button className='btn' variant="primary" onClick={onSignUp}><a id='a' href= '/home'>signup</a></Button>
                                    {msg? <span>{handleMsg()}</span> : null}
                                </div>
                            </Form>
                            <p>Already have an account?<a href='/login'>login</a></p>
                        </Card>
                      </Col>
                    </Row>
                </Container>  
            </div>
        </div>
    )
}

export default SignupForm
