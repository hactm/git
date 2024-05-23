import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import {Button, CardImg, CardImgOverlay, CardTitle, Col, Row} from "react-bootstrap";
import { CSSTransition } from 'react-transition-group'
import './index.css'
import { useParams } from 'react-router-dom'
import Menu from "./Menu";
import Footer from "./Footer"
import {useIsVisible} from "./MainPage";
import RightContainer from './RightContainer'
import LeftContainer from "./LeftContainer";
import './App.css';




const DefaultModel = () => {
    let {modelId}=useParams()
    const [defaultModel, setDefaultModel] = useState({default_model: {}, image_url: "http://164.92.207.100/modelsicon/conf_a_class.png" });
    const [configElement, setConfigElement] = useState('wheels');

    const getApiData = async () => {
        const response = await fetch(
            `http://164.92.207.100/default_models/${modelId}`
        ).then((response) => response.json());
        if (!window.sessionStorage.getItem(`wheel_id_${modelId}`)) {
            window.sessionStorage.setItem(`wheel_id_${modelId}`, response.wheels[0].id);
        }
        if (!window.sessionStorage.getItem(`color_id_${modelId}`)) {
            window.sessionStorage.setItem(`color_id_${modelId}`, response.colors[0].id);
        }
        const image_url_response = await fetch(
            `http://164.92.207.100/default_models/${modelId}?wheel_id=${window.sessionStorage.getItem(`wheel_id_${modelId}`)}&color_id=${window.sessionStorage.getItem(`color_id_${modelId}`)}`
        ).then((response) => response.json());

        setDefaultModel({default_model: response, image_url: image_url_response.image_url});
    };

    const getModelData = async () => {
        const image_url_response = await fetch(
            `http://164.92.207.100/default_models/${modelId}?wheel_id=${window.sessionStorage.getItem(`wheel_id_${modelId}`)}&color_id=${window.sessionStorage.getItem(`color_id_${modelId}`)}`
        ).then((response) => response.json());
        setDefaultModel({default_model: defaultModel.default_model, image_url: image_url_response.image_url})
    };

    useEffect(() => {
        getApiData();
    }, []);


    return (
        <div>
            <Card className="bg-dark text-black">
                <Card.Img src={defaultModel.default_model.base_image_url} alt="Card image" />
                <Card.ImgOverlay>
                    <Menu></Menu>
                   
                    {(defaultModel.default_model.container_type === 'right') && <RightContainer upTransitionRef={false} title={defaultModel.default_model.name} description={defaultModel.default_model.description}></RightContainer>}
                    <div class="wrap">
                        <Container>
                        <Button className="text-grey" variant="primary"
                        position="absolute"
                        style={{backgroundColor: 'rgba(52, 52, 52, 0.4)',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        height:'6%'}}
                        classNames='parent'>Посмотреть конфигуратор</Button>
                        </Container>    
                    </div>    
                    {(defaultModel.default_model.container_type === 'left') && <LeftContainer upTransitionRef={false} title={defaultModel.default_model.name} description={defaultModel.default_model.description}></LeftContainer>}
                  
                </Card.ImgOverlay>
                
            </Card>

            <Card>
                <Card.Img src='http://164.92.207.100/modelsicon/conf_a_class.png' alt="Card image"/>
                <CardImgOverlay >
                    <Row style={{backgroundColor: 'rgba(52, 52, 52, 0.8)',  width: '90%', margin:'3%', padding:'1%', alignContent:"center" }}>
                        <Col>
                            <Row>
                                <Container style={{marginBottom:'3%', height: '700px',width: '880px'}}>
                                    <CardImg src={defaultModel.image_url}/>
                                </Container>
                            </Row>
                            <Row>
                                <Container>
                                    <Container style={{display: 'flex', flexDirection:'row'}}>
                                        {configElement === 'wheels' && defaultModel?.default_model.wheels?.map((wheel) =>
                                            <>
                                                <Button onClick={() => {
                                                    window.sessionStorage.setItem(`wheel_id_${modelId}`, wheel.id);
                                                    getModelData();
                                                }} padding="0" style={{backgroundColor: 'rgba(52, 52, 52, 0.2)',width: '180px', height: '170px',}}>
                                                    <Card.Img src={wheel?.image_url} style={{margin: '0', width: '150px', height: '150px'}}/>
                                                </Button>
                                            </>
                                        )}

                                        {configElement === 'colors' && defaultModel?.default_model.colors?.map((color) =>
                                            <>
                                                <Button onClick={() => {
                                                    window.sessionStorage.setItem(`color_id_${modelId}`, color.id);
                                                    getModelData();
                                                }} padding="0" style={{backgroundColor: 'rgba(52, 52, 52, 0.2)',width: '180px', height: '170px',}}>
                                                    <Card.Img src={color?.image_url} style={{margin: '0', width: '150px', height: '150px'}}/>
                                                </Button>
                                            </>
                                        )}
                                    </Container>
                                </Container>
                            </Row>
                        </Col>
                        <Col lg="3">
                            <Container>
                                <Container style={{display: 'flex', flexDirection:'column'}}>
                                    <Button onClick={() => setConfigElement('wheels')} variant="primary" padding="0" style={{backgroundColor: 'rgba(52, 52, 52, 0.2)',width: '180px', height: '170px',}}>
                                        <Card.Img src='http://164.92.207.100/modelsicon/image_tapki.png' style={{width: '150px', height: '150px'}}/>
                                    </Button>
                                    <Button onClick={() => setConfigElement('colors')} variant="primary" padding="0" style={{backgroundColor: 'rgba(52, 52, 52, 0.2)',width: '180px', height: '150px',}}>
                                        <Card.Img src='http://164.92.207.100/modelsicon/conf_korpus.png' style={{ width: '155px', height: '124px'}}/>
                                    </Button>
                                    <Button variant="light"style={{width:'180px', height:'40',marginTop: '285px'}}>Цена: 39999$</Button>
                                </Container>
                            </Container>
                        </Col>
                    </Row>
                </CardImgOverlay>
            </Card>
            <Footer></Footer>
        </div>
        );}



export default DefaultModel;