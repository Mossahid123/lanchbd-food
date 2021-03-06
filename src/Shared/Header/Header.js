import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';

const Header = () => {
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg"  >
  <Container>
  <Navbar.Brand href="#home">
      <img style={{height:'30px'}} src={logo} alt="logo" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link  as={Link} to='/home'>Home</Nav.Link>
      <Nav.Link as={Link} to='/orders'>Orders</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to='/login' >Login</Nav.Link>
      <Nav.Link  as={Link} to="/singup">
        Sing Up
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;