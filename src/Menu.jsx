import HomePage from "./MainPage";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {CSSTransition} from "react-transition-group";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
import React, {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

const Menu = () => {
    const [showCatalog, setShowCatalog] = useState(false);
    const catalogRef = useRef(null);
    const [defaultModels, setDefaultModels] = useState([]);
    const navigate = useNavigate();
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
        <>
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
            <CSSTransition nodeRef={catalogRef} in={showCatalog} classNames='catalog' timeout={200}
                           unmountOnExit>
                <Container ref={catalogRef}
                           style={{
                               backgroundColor: 'rgba(52, 52, 52, 0.4)', marginTop: '6px', display: 'flex',
                               flexWrap: 'wrap',
                               alignContent: 'flex-start',
                               height: '100%',
                               position: 'absolute',
                               left: '0',
                               right: '0',
                               marginLeft: 'auto',
                               marginRight: 'auto'
                           }} classNames='parent'>
                    {defaultModels.map((defaultModel) =>
                        <>
                            <Card style={{width: '16rem', margin: '25px'}}>
                                <Card.Img variant="top" src={defaultModel.little_image_url}/>
                                <Card.Body>
                                    <Card.Title>{defaultModel.little_description}</Card.Title>
                                    <Card.Text>{}</Card.Text>
                                    <Button onClick={() => {navigate(`/default_model/${defaultModel.id}`); navigate(0)}} className="bg-white text-black" variant="primary">Посмотреть модель</Button>
                                </Card.Body>
                            </Card>
                        </>
                    )}
                </Container>
            </CSSTransition>
        </>
    )
}
export default Menu;