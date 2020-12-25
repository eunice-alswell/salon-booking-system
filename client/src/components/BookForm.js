import React from 'react'
import { Row,Col,Form,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  "./style/book.css";

function BookForm() {
  return (
    <div className='book'>
      <div className = 'container' >
      <div className='card'>
        <Form>
          <h1>Booking Form</h1>
          <Form.Control className ='form-control' placeholder="username" required />
          <Row>
              <Col>
                <input type="time" id="appt" placeholder="--:--" required/>
              </Col>
              <Col>
              <input type="date" id="birthday" placeholder="mm/dd/yy" required/>
              </Col>
          </Row>
          <Form.Control className ='form-control' type="email" placeholder="Enter email"  required/>
          <input type="tel" id="phone" name="phone" placeholder="phone number" required/>
          <div className='btn-div'>
          <Button onClick= {e=>alert('booking is suceessful')} className='btn' variant="primary">Book</Button>
          </div>
        </Form>
      </div>
    </div>
    </div>
  )
}

export default BookForm

