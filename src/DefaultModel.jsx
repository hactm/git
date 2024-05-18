import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import {Button} from "react-bootstrap";
import { CSSTransition } from 'react-transition-group'
import './index.css'
import { useParams } from 'react-router-dom'




const HomePage = () => {

  

    const [showCatalog, setShowCatalog] = useState(false);
    const [showMainText, setShowMainText] = useState(false);
    const catalogRef = useRef(null);
    const mainRef = useRef(null);
    setInterval(() => {
        setShowMainText(true);}, 100);
    let {modelId}=useParams()
    const [defaultModels, setDefaultModels] = useState([]); 
 
    const getApiData = async () => {  
        const response = await fetch(  
            "http://164.92.207.100/default_models" 
        ).then((response) => response.json());  
      
            setDefaultModels(response);  
        };  
      
        useEffect(() => {  
            getApiData();  
        }, []);

    return (
        <div>
            {modelId}
            <Card className="bg-dark text-black">
                <Card.Img src="http://164.92.207.100/main-image.avif" alt="Card image" />
                <Card.ImgOverlay>
                    <Navbar collapseOnSelect expand="lg" className="shadow-lg">
                        <Container>
                            <Navbar.Brand href="/">
                                Mercedes-Benz
                                <img width="50" src="http://164.92.207.100/mercedes.png" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto"> {/* Space between elements */}
                                </Nav>
                                <Nav>
                                    <Nav.Link onClick={() => setShowCatalog(!showCatalog)}>
                                        <span className="navbar-toggler-icon" style={{marginRight: '12px'}}></span>
                                        Каталог
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                   
                   
                </Card.ImgOverlay>
            </Card>
        </div>
    );
}

export default HomePage;