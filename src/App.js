import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './Components/Main';
import { Catalog } from './Components/Catalog';
import { LogIN } from './Components/LogIN';
import { Service } from './Components/Service';
import { Cart } from './Components/Cart';
import { Favorites } from './Components/Favorites';


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

  function CartFromService() {
    return (
      <>
        <Service />
        <Cart />
      </>
    );
  }

  function FavoritesFromService() {
    return (
      <>
        <Service />
        <Favorites />
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
          <Route path='/service' element={<CartFromService />}></Route>
          <Route path='/service/cart' element={<CartFromService />}></Route>
          <Route path='/service/favorites' element={<FavoritesFromService />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
