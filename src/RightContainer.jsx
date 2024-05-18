import Container from "react-bootstrap/Container";
import {CSSTransition} from "react-transition-group";
import React, {useRef, useState} from "react";
import {useIsVisible} from "./App";


const RightContainer = (props) => {
    const ref = useRef(null);
    const transitionRef = useRef(null);
    const showText = useIsVisible(transitionRef);
    return(
        <CSSTransition nodeRef={ref} in={showText} classNames='main-text' timeout={400}>
            <Container ref={ref} style={{height: '100%', width: '90%', marginRight: '5%'}}>
                <Container
                    className="w-50 float-end mx-auto align-items-right justify-content-right"
                    ref={ref} style={{height: '50%', marginTop: '100px', display: 'inline-block'}}>
                    {props.upTransitionRef && <div ref={transitionRef}></div>}
                    {showText && <div>
                        <h1 style={{fontSize: "55px"}}>{props.title}</h1>
                        <h1 style={{fontSize: "25px"}}>{props.description}</h1>
                    </div>}
                    {!props.upTransitionRef && <div ref={transitionRef}></div>}
                </Container>
            </Container>
        </CSSTransition>
    )
}
export default RightContainer;