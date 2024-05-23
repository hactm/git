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
                    <LeftContainer upTransitionRef={false} title={"Практичность, надёжность и комфорт"} description={"Компания Mercedes-Benz c самого своего появления в 1886 году стремилась к прогрессу и инновациям. Само появление первого нашего автомобиля стало в определенном смысле революцией в человеческом обществе. Наши разработки и сейчас, в 21 веке, меняют мир, делают жизнь более динамичной, яркой и интересной."}>

                    </LeftContainer>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white">
                <Card.Img src="http://164.92.207.100/old-merc.jpg" alt="Card image"/>
                <Card.ImgOverlay>
                    <RightContainer upTransitionRef={true} title={"Создаём шедевры с 1901"} description={"«Мерседесы» давно стали чем-то большим, чем просто дорогими, комфортными и престижными машинами. Соперничать с ними в притягательности, элитарности и «породистости» могут разве что «роллс-ройсы», «бентли» да некоторые «американцы» вроде определенных моделей «кадиллака» и специфичных внедорожников, но это уже совершенно особенная техника и отдельная, как говорится, тема."}>

                    </RightContainer>
                </Card.ImgOverlay>
            </Card>
            <Footer></Footer>
        </div>
    );
}

export default MainPage;