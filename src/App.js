import HomePage from "./MainPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultModel from './DefaultModel';
import MainPage from './MainPage'
import {useEffect, useState} from "react";

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

export function handleScroll() {
    window.scroll({
        top: document.body.offsetHeight,
        left: 0,
        behavior: 'smooth',
    });
}

function App() {
  return (
    <>   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route exact path="default_model/:modelId" element={<DefaultModel/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;


