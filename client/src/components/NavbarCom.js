import React from 'react'
import { Nav,Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/login.css'

function NavbarCom() {
    return (
        <div>
            <Navbar className='nav' bg="primary" variant="dark">
              <Navbar.Brand href="#home">Sweet-Dream</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
              </Nav>
              <Nav >
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/logout">Logout</Nav.Link>
              </Nav>
            </Navbar>
        </div>
    )
}

export default NavbarCom
