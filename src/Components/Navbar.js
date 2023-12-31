import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../Assets/image 3 (3).png'; // Replace with the actual path to your logo
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* Use an <img> element for the logo */}
        <Navbar.Brand>
          <Link to={'/'}>
            <img 
              src={logo}
              alt="Your Logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-5"> {/* Align items to the right with margin */}
            <Nav.Link className="me-3">About</Nav.Link>
            <Nav.Link className="me-3">Contact us</Nav.Link>
            <Nav.Link className="me-3">Timetable</Nav.Link>
            <Nav.Link className="me-3">Live Location</Nav.Link>
          </Nav>
          <Nav className="me-3"> {/* Add margin to the right side of the Nav containing the button */}
            <Button variant="danger">Sign In</Button>
          </Nav>
          <br></br>
          <br></br>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
