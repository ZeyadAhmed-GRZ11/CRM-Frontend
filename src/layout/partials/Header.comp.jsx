import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import { Link } from "react-router-dom";

export const Header = () => {
    
    function logout(){
      window.location.href='/'
    }

  return (
    
    <Navbar collapseOnSelect bg="danger" variant="dark"
     expend="md">
        <Container>
        <Navbar.Brand href="#">
            Dern-Support
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ml-auto' style={{'padding':'10px 30px', 'space-around':'25px', 'space-between':'25px', 'margin-right':'20px'}}>
   
               {/* <Link to="/dashboard">Dashboard</Link>
               <Link to="/tickets">Tickets</Link>
               <Link to="">Logout</Link> */}

             <LinkContainer to ="/dashboard">
                  <Nav.Link> Dashboard </Nav.Link> 
             </LinkContainer>
             <LinkContainer to ="/tickets">
                  <Nav.Link> Tickets </Nav.Link> 
             </LinkContainer>
             <LinkContainer to ="/QaHelp">
                  <Nav.Link> QA-Help </Nav.Link> 
             </LinkContainer>
             
              <Nav.Link onClick={logout}> Logout </Nav.Link>
           
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
