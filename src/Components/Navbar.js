import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import logo from '../Assets/logo.png'; // Replace with the actual path to your logo

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* Use an <img> element for the logo */}
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Your Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-5"> {/* Align items to the right with margin */}
            <Nav.Link href="#home" className="me-3">About</Nav.Link>
            <Nav.Link href="#link" className="me-3">Contact us</Nav.Link>
            <Nav.Link href="#home" className="me-3">Timetable</Nav.Link>
            <Nav.Link href="#home" className="me-3">Live Location</Nav.Link>
          </Nav>
          <Nav className="me-3"> {/* Add margin to the right side of the Nav containing the button */}
            <Button variant="danger">Sign In</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
