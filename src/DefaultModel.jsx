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




const HomePage = () => {
    return (
        <div>
            <Card className="bg-dark text-black">
                <Card.Img src="http://164.92.207.100/main-image.avif" alt="Card image" />
                <Card.ImgOverlay>
                    <Menu></Menu>
                </Card.ImgOverlay>
            </Card>
            <Footer></Footer>
        </div>
    );
}

export default HomePage;