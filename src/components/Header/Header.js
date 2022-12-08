import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import auth from "../../firebase.init";
import logo from '../../images/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
            <img style={{height: '40px'}} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav className="d-flex align-items-center">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/addservice">Add Service</Nav.Link>
            <Nav.Link href="/register">
              <button className="btn btn-primary">Register</button>
            </Nav.Link>
            {
              user ? <Nav.Link>
              <button onClick={handleSignOut} className="btn btn-success">Sign Out</button>
            </Nav.Link>
              :
              <Nav.Link href="/login">
              <button className="btn btn-success">Login</button>
            </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
