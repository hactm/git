import React, {useCallback, useState, useRef, useEffect, useMemo, createRef} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import {Button} from "react-bootstrap";
import { CSSTransition } from 'react-transition-group'
import './index.css'

export function useIsVisible(ref) {
    {
        const [isIntersecting, setIntersecting] = useState(false);

        useEffect(() => {
            const sections = document.querySelectorAll('section');
            const observer = new IntersectionObserver(([entry]) =>
                setIntersecting(entry.isIntersecting)
            );

            observer.observe(ref.current);
        }, [ref]);

        return isIntersecting;
    }
}

const HomePage = () => {
    const [showCatalog, setShowCatalog] = useState(false);
    const catalogRef = useRef(null);
    const mainRef = useRef(null);
    const mainTransitionRef = useRef(null);
    const secondTransitionRef = useRef(null);
    const secondRef = useRef(null);
    const showMainText = useIsVisible(mainTransitionRef);
    const showSecondText = useIsVisible(secondTransitionRef);

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
            <Card className="bg-dark text-black">
                <Card.Img src="http://164.92.207.100/modelsicon/MainIcon.png" alt="Card image"/>
                <Card.ImgOverlay>
                    <Navbar collapseOnSelect expand="lg" className="shadow-lg">
                        <Container>
                            <Navbar.Brand href="/">
                                Mercedes-Benz
                                <img width="50" src="http://164.92.207.100/mercedes.png"/>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
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
                    <CSSTransition nodeRef={mainRef} in={showMainText} classNames='main-text' timeout={400}>
                        <Container ref={mainRef} style={{height: '100%', position: 'absolute', width: '90%'}}>
                            <Container
                                className="w-50 float-start mx-auto align-items-center justify-content-center"
                                ref={mainRef} style={{height: '50%', marginTop: '100px', display: 'inline-block'}}>
                                {showMainText && <div>
                                    <h1 style={{fontSize: "55px"}}>Появляющийся текст большими буквами</h1>
                                    <h1 style={{fontSize: "25px"}}>Много текста маленькими буквами; Много текста
                                        маленькими буквами; Много текста маленькими буквами; Много текста маленькими
                                        буквами; Много текста маленькими буквами; Много текста маленькими буквами; Много
                                        текста маленькими буквами; Много текста маленькими буквами; Много текста
                                        маленькими буквами; Много текста маленькими буквами</h1>
                                </div>}
                                <div ref={mainTransitionRef}></div>
                            </Container>
                        </Container>
                    </CSSTransition>
                    <CSSTransition nodeRef={catalogRef} in={showCatalog} classNames='catalog' timeout={200}
                                   unmountOnExit>
                        <Container ref={catalogRef}
                                   style={{
                                       backgroundColor: 'rgba(52, 52, 52, 0.4)', marginTop: '6px', display: 'flex',
                                       flexWrap: 'wrap',
                                       alignContent: 'flex-start',
                                       height: '100%'
                                   }} classNames='parent'>
                            {defaultModels.map((defaultModel) =>
                                <>
                                    <Card style={{width: '16rem', margin: '7px'}}>
                                        <Card.Img variant="top" src={defaultModel.base_image_url}/>
                                        <Card.Body>
                                            <Card.Title>{defaultModel.little_description}</Card.Title>
                                            <Card.Text>{}</Card.Text>
                                            <Button className="bg-white text-black" variant="primary">Посмотреть
                                                модель</Button>
                                        </Card.Body>
                                    </Card>
                                </>
                            )}
                        </Container>

                    </CSSTransition>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white">
                <Card.Img src="http://164.92.207.100/old-merc.jpg" alt="Card image"/>
                <Card.ImgOverlay>
                    <CSSTransition nodeRef={secondRef} in={showSecondText} classNames='main-text' timeout={400}>
                        <Container ref={secondRef} style={{height: '100%', width: '90%'}}>
                            <Container
                                className="w-50 float-end mx-auto align-items-right justify-content-right"
                                ref={secondRef} style={{height: '50%', marginTop: '100px', display: 'inline-block'}}>
                                <div ref={secondTransitionRef}></div>
                                {showSecondText && <div>
                                    <h1 style={{fontSize: "55px"}}>Создаём шедевры с 1901</h1>
                                    <h1 style={{fontSize: "25px"}}>Много текста маленькими буквами; Много текста
                                        маленькими буквами; Много текста маленькими буквами; Много текста маленькими
                                        буквами; Много текста маленькими буквами; Много текста маленькими буквами; Много
                                        текста маленькими буквами; Много текста маленькими буквами; Много текста
                                        маленькими буквами; Много текста маленькими буквами</h1>
                                </div>}
                            </Container>
                        </Container>
                    </CSSTransition>
                </Card.ImgOverlay>
            </Card>
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
        </div>
    );
}

export default HomePage;