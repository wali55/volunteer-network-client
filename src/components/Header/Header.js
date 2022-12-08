import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
            <img style={{height: '40px'}} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav className="d-flex align-items-center">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link>
              <button className="btn btn-primary">Register</button>
            </Nav.Link>
            <Nav.Link>
              <button className="btn btn-success">Login</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
