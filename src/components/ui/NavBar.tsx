import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoKlever from '../../resours/img/logoKlever.png';


export default function NavBar(): JSX.Element {
  return (
      <Container > 
    <Navbar className='nuvBar' style={{ backgroundColor: 'rgb(179, 174, 168)' }}  variant="dark">
        <img
          src={logoKlever}
          width="70"
          height="70"
          className="me-auto me-9"
          alt="logo"
        />
        <Navbar.Brand href="/" className="me-8">
          Main
        </Navbar.Brand>
        <Nav className="ms-4">
          <Nav.Link href="/gallery">Gallery</Nav.Link>
          <Nav.Link href="/contacts">Contacts</Nav.Link>
        </Nav>
    </Navbar>
      </Container>
  );
}
