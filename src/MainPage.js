import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown'; 
import DropdownButton from 'react-bootstrap/DropdownButton';


const HomePage = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
            <img width="50" src="http://164.92.207.100/mercedes.png" />
        </Navbar.Brand>
        

      

      </Container>
    </Navbar>    
      
    </div>

  );
}

export default HomePage;