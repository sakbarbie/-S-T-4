import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import BooksSpace from "./BooksSpace";




const NavBar = () => {
  
  return ( 
 
  <>
  <div>
     <Navbar bg="blue" variant="blue">
        <Container>
          <Navbar.Brand href="#home">MARVELS</Navbar.Brand>
          <Nav className="me-auto">
            
            
            <Nav.Link as={Link} to={"/Contact"}>View Page</Nav.Link>
          </Nav>
            <h6 style={{color:"black"}}> Avengers</h6> 
        </Container>
      </Navbar>
    </div>
    
    <div className="bodyTo">
    <Routes>
      <Route exact path="/" element={<BooksSpace/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
  </div>
   </>
  

   
  );
};

export default NavBar;