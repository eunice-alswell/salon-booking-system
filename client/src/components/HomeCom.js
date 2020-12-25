import React from 'react'
import {Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/home.css'

function HomeCom() {
    return (
        <div>
            <div className='wave-container'>   
                <div className='text'>
                    <h1>Hello, customer!</h1>
                    <p>
                        You are welcome to Sweet-Dream Beauty and hair Salon, 
                        <br></br>
                        We offer you with nice hair style,pedicure,nice nail.
                        <br></br>
                        <h5>click on the Button to book now!!</h5>
                    </p>
                    <div className='btn-div'>
                    <Button className='btn' variant="primary"><a id= 'a' href='/book'>Book</a></Button>
                    </div>
                </div>
                {/* <div className='svg'>
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,128L60,138.7C120,149,240,171,360,160C480,149,600,107,720,90.7C840,75,960,85,1080,112C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div> */}
            </div>
            
        </div>
    )
}

export default HomeCom
