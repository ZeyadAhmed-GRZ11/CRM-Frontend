import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';

export const Header = () => {
  return (
    
    <Navbar collapseOnSelect bg="info" variant="dark"
     expend="md">
        <Container>
        <Navbar.Brand href="#">
            Dern-Support
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ml-auto'>
               <Nav.Link href="#home">Dashboard</Nav.Link>
               <Nav.Link href="#home">Tickets</Nav.Link>
               <Nav.Link href="#link">Logout</Nav.Link>
            
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
