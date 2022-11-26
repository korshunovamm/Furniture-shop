import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './Components/Main';
import { Catalog } from './Components/Catalog';
import { LogIN } from './Components/LogIN';
import { Service } from './Components/Service';


import './App.css';

function App() {
  function ProfileFromMain() {
    return (
      <>
        <Main />
        <LogIN />
      </>
    );
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Main />}></Route>
          <Route path='/main' element={<Main />}></Route>
          <Route path='/catalog' element={<Catalog />}></Route>
          <Route path='/main/profile' element={<ProfileFromMain />}></Route>
          <Route path='/service' element={<Service />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
