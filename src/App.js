import HomePage from "./MainPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultModel from './DefaultModel';

function App() {
  return (
    <>   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="default_model/:id" render={(props) => (<DefaultModel id={props.match.params.id}/>)} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;


