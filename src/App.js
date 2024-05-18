import HomePage from "./MainPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultModel from './DefaultModel';

function App() {
  return (
    <>   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="default_model/:modelId" element={<DefaultModel/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;


