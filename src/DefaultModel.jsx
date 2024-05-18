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
            <Card className="bg-dark text-black">
                <Card.Img src="http://164.92.207.100/main-image.avif" alt="Card image" />
                <Card.ImgOverlay>
                    <Menu></Menu>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
}

export default HomePage;