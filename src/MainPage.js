import React, {useCallback, useState, useRef, useEffect, useMemo, createRef} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Menu from './Menu'
import { CSSTransition } from 'react-transition-group'
import './index.css'
import Footer from "./Footer";

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
    const mainRef = useRef(null);
    const secondRef = useRef(null);
    const mainTransitionRef = useRef(null);
    const secondTransitionRef = useRef(null);
    const showMainText = useIsVisible(mainTransitionRef);
    const showSecondText = useIsVisible(secondTransitionRef);


    return (
        <div>
            <Card className="bg-dark text-black">
                <Card.Img src="http://164.92.207.100/modelsicon/MainIcon.png" alt="Card image"/>
                <Card.ImgOverlay>
                    <Menu></Menu>
                    <CSSTransition nodeRef={mainRef} in={showMainText} classNames='main-text' timeout={400}>
                        <Container ref={mainRef} style={{height: '100%', width: '90%', marginLeft: '5%'}}>
                            <Container
                                className="w-50 float-start"
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
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white">
                <Card.Img src="http://164.92.207.100/old-merc.jpg" alt="Card image"/>
                <Card.ImgOverlay>
                    <CSSTransition nodeRef={secondRef} in={showSecondText} classNames='main-text' timeout={400}>
                        <Container ref={secondRef} style={{height: '100%', width: '90%', marginRight: '5%'}}>
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
            <Footer></Footer>
        </div>
    );
}

export default HomePage;