import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main} from './Components/Main';



import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Main />
        
        {/* <Routes>
          <Route path='' element={<Main />}></Route>
          <Route path='/catalog' element={<Catalog />}></Route>
          <Route path='/service' element={<Service />}></Route>
        </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
