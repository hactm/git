import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import {Button} from "react-bootstrap";
import { CSSTransition } from 'react-transition-group'
import './index.css'






const HomePage = () => {

  

    const [showCatalog, setShowCatalog] = useState(false);
    const [showMainText, setShowMainText] = useState(false);
    const catalogRef = useRef(null);
    const mainRef = useRef(null);
    setInterval(() => {
        setShowMainText(true);

    const [DefaultModels, setDefaultModels] = useState([]); 
 
    const getApiData = async () => {  
        const response = await fetch(  
            "http://164.92.207.100/default_models" 
        ).then((response) => response.json());  
      
            setDefaultModels(response);  
        };  
      
        useEffect(() => {  
            getApiData();  
        }, []);
    }, 100);
    return (
        <div>
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
                    <CSSTransition nodeRef={mainRef} in={showMainText} classNames='main-text' timeout={200} unmountOnExit>
                        <Container ref={mainRef} style={{height: '100%', position: 'absolute', width: '90%'}}>
                            <Container
                                className="w-50 float-start mx-auto align-items-center justify-content-center"
                                ref={mainRef} style={{height: '50%', marginTop: '100px', display: 'inline-block'}}>
                                <h1 style={{fontSize: "55px"}}>Появляющийся текст большими буквами</h1>
                                <h1 style={{fontSize: "25px"}}>Много текста маленькими буквами; Много текста
                                    маленькими буквами; Много текста маленькими буквами; Много текста маленькими
                                    буквами; Много текста маленькими буквами; Много текста маленькими буквами; Много
                                    текста маленькими буквами; Много текста маленькими буквами; Много текста
                                    маленькими буквами; Много текста маленькими буквами</h1>
                            </Container>
                        </Container>
                    </CSSTransition>
                    <CSSTransition nodeRef={catalogRef} in={showCatalog} classNames='catalog' timeout={200}
                                   unmountOnExit>
                        <Container ref={catalogRef}
                                   style={{backgroundColor: 'rgba(52, 52, 52, 0.4)', marginTop: '6px'}}>
                            {DefaultModels.map(() => 
                                <>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={"http://164.92.207.100/a-class.jpeg"} />
                                        <Card.Body>
                                            <Card.Title>{}</Card.Title>
                                            <Card.Text>{}</Card.Text>
                                            <Button className="bg-white text-black" variant="primary">Посмотреть модель</Button>
                                        </Card.Body>
                                    </Card>
                                </>
                            )}
                             {DefaultModels.map(() => 
                                <>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={"http://164.92.207.100/a-class.jpeg"} />
                                        <Card.Body>
                                            <Card.Title>{}</Card.Title>
                                            <Card.Text>{}</Card.Text>
                                            <Button className="bg-white text-black" variant="primary">Посмотреть модель</Button>
                                        </Card.Body>
                                    </Card>
                                </>
                            )}
                        </Container>
                        
                    </CSSTransition>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
}

export default HomePage;