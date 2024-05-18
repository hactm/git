import React, {useCallback, useState, useRef, useEffect, useMemo, createRef} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Menu from './Menu'
import { CSSTransition } from 'react-transition-group'
import './index.css'
import Footer from "./Footer";
import {useIsVisible} from "./App";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const MainPage = () => {
    return (
        <div>
            <Card className="bg-dark text-black">
                <Card.Img src="http://164.92.207.100/modelsicon/MainIcon.png" alt="Card image"/>
                <Card.ImgOverlay>
                    <Menu></Menu>
                    <LeftContainer upTransitionRef={false} title={"Появляющийся текст большими буквами"} description={"Много текста маленькими буквами; Много текста\n" +
                        "                                        маленькими буквами; Много текста маленькими буквами; Много текста маленькими\n" +
                        "                                        буквами; Много текста маленькими буквами; Много текста маленькими буквами; Много\n" +
                        "                                        текста маленькими буквами; Много текста маленькими буквами; Много текста\n" +
                        "                                        маленькими буквами; Много текста маленькими буквами"}>

                    </LeftContainer>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white">
                <Card.Img src="http://164.92.207.100/old-merc.jpg" alt="Card image"/>
                <Card.ImgOverlay>
                    <RightContainer upTransitionRef={true} title={"Создаём шедевры с 1901"} description={"Много текста маленькими буквами; Много текста\n" +
                        "                                        маленькими буквами; Много текста маленькими буквами; Много текста маленькими\n" +
                        "                                        буквами; Много текста маленькими буквами; Много текста маленькими буквами; Много\n" +
                        "                                        текста маленькими буквами; Много текста маленькими буквами; Много текста\n" +
                        "                                        маленькими буквами; Много текста маленькими буквами"}>

                    </RightContainer>
                </Card.ImgOverlay>
            </Card>
            <Footer></Footer>
        </div>
    );
}

export default MainPage;