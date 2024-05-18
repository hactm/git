import Menu from "./Menu";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import React from "react";

const Footer = () => {
    return(
        <Navbar collapseOnSelect expand="lg" className="shadow-lg"
                style={{display: 'flex', flexDirection: 'column-reverse', height: '100%'}} classNames='parent'>
            <Container>
                <Navbar.Brand href="/">
                    Mercedes-Benz
                    <img width="50" src="http://164.92.207.100/mercedes.png"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"> {/* Space between elements */}</Nav>
                    <Nav>+375 29 603 99 99</Nav>
                    <Nav className="me-auto"> {/* Space between elements */}</Nav>
                    <Nav>Тимирязева, д. 70, Минск, 220035</Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Footer;