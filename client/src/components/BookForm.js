import React, {useState} from 'react'
import { Row,Col,Form,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  "./style/book.css";

function BookForm( props) {

  const [name, setName] = useState(''), [time, setTime]= useState(''),[date,setDate]=useState('')
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    props.onSubmit({
        id: Math.floor(Math.random() * 1000),
        text: {
          name:name,
          time:time,
          date: date
        }
      });
      setName('')
      setTime('')
      setDate('')
    
}




  return (
    <div className='book'>
      <div className = 'container' >
      <div className='card'>
        <Form onSubmit = {handleSubmit}>
          <h1>Booking Form</h1>
          <Form.Control className ='form-control' placeholder="name" required value={name} onChange = {e=> setName(e.target.value) } />
          <Row>
              <Col>
                <input type="time" id="appt" placeholder="--:--" required value = {time} onChange = {e => setTime(e.target.value)}/>
              </Col>
              <Col>
              <input type="date" id="birthday" placeholder="mm/dd/yy" required value = {date} onChange = {e => setDate(e.target.value)} />
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

