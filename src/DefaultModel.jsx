import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import {Button} from "react-bootstrap";
import { CSSTransition } from 'react-transition-group'
import './index.css'
import { useParams } from 'react-router-dom'
import Menu from "./Menu";
import Footer from "./Footer"
import {useIsVisible} from "./MainPage";
import RightContainer from './RightContainer'




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
                    <RightContainer upTransitionRef={false} title={defaultModel.name} description={defaultModel.description}></RightContainer>
                </Card.ImgOverlay>
            </Card>
            <Footer></Footer>
        </div>
    );
}

export default DefaultModel;