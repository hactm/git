import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import {Button, CardImg, CardImgOverlay, CardTitle} from "react-bootstrap";
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
    const [defaultModel, setDefaultModel] = useState({});

    const getApiData = async () => {
        const response = await fetch(
            `http://164.92.207.100/default_models/${modelId}`
        ).then((response) => response.json());
        console.log(`http://164.92.207.100/default_models/${modelId}`)
        console.log(response)
        setDefaultModel(response);
    };

    useEffect(() => {
        getApiData();
    }, []);


    return (
        <div>
            <Card className="bg-dark text-black">
                <Card.Img src={defaultModel.base_image_url} alt="Card image" />
                <Card.ImgOverlay>
                    <Menu></Menu>
                   
                    {(defaultModel.container_type === 'right') && <RightContainer upTransitionRef={false} title={defaultModel.name} description={defaultModel.description}></RightContainer>}      
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
                    {(defaultModel.container_type === 'left') && <LeftContainer upTransitionRef={false} title={defaultModel.name} description={defaultModel.description}></LeftContainer>}
                  
                </Card.ImgOverlay>
                
            </Card>
            <Card>
                <Card.Img src='http://164.92.207.100/modelsicon/conf_a_class.png' alt="Card image"/>
                <Container >
                    <CardImgOverlay  style={{backgroundColor: 'rgba(52, 52, 52, 0.8)',height: '64%', width: '90%', margin:'5%', display: 'flex', flexDirection: 'row-reverse',display:'flex', alignContent:"center" }}classNames="parent">
                        <Container style={{
                            display: 'flex', width: '150px', height: '150px',
                            justifyContent: 'center',
                            alignContent: 'center' }}
                            classNames="parent">

                            <Container style={{display: 'fles', flexDirection:'column', justifyContent:'space-around'}}>
                                <Button variant="primary" padding="0" style={{backgroundColor: 'rgba(52, 52, 52, 0.2)',width: '180px', height: '170px',}}>    
                                    <Card.Img src='http://164.92.207.100/modelsicon/image_tapki.png' style={{margin: '0', width: '150px', height: '150px',
                                        display: 'flex',
                                        justifyContent: 'flex-end' }}
                                        classNames="parent"/>
                                </Button>        
                                <Button variant="primary" padding="0" style={{backgroundColor: 'rgba(52, 52, 52, 0.2)',width: '180px', height: '150px',}}>
                                    <Card.Img src='http://164.92.207.100/modelsicon/conf_korpus.png' style={{ width: '155px', height: '124px',
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        }}
                                        classNames="parent"/>
                                </Button>
                                <Button variant="primary" padding="0" style={{backgroundColor: 'rgba(52, 52, 52, 0.2)',width: '180px', height: '150px',}}>
                                    <Card.Img src='http://164.92.207.100/modelsicon/amg_paket_conf.png' style={{ width: '155px', height: '110px',
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        }}
                                        classNames="parent"/>
                                </Button>
                            </Container>    
                            <Container style={{
                                display: 'flex', width: '150px',
                                justifyContent: 'center',
                                alignContent: 'center' }}
                                classNames="parent">
                            </Container>    
                            
                        </Container> 
                        <Container
                            style={{height: '70%', width: '70%',margin: '0',
                            display: 'flex',
                            justifyContent:'flex-start',
                            alignItems:'flex-start'}}
                            classNames="parent">
                                <CardImg src='http://164.92.207.100/modelsicon/conf_a_class.png'/>
                        </Container>
                        <Container style={{width: '130px', height:'130px', padding:"0",
                         display: 'flex',
                          alignItems:'flex-end'}}classNames="parent"></Container>
                          
                    </CardImgOverlay>
                </Container>
            </Card>      
            <Footer></Footer>
        </div>
        );}



export default DefaultModel;