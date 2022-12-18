import '../Components_css/Cart.css';
import wardrobe1 from '../FurniturePictures/wardrobe1.jpeg';
import wardrobe2 from '../FurniturePictures/wardrobe2.jpeg';
import wardrobe3 from '../FurniturePictures/wardrobe3.jpeg';
import wardrobe4 from '../FurniturePictures/wardrobe4.jpeg';
import {  useEffect, useState } from 'react';
import { CartGood } from './CartGood.js'



export function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/favorites/')
      .then((responce) => responce.json())
      .then((data) => setFavorites(data));
  }, []);

  console.log(favorites);

  useEffect(() => {
    document.getElementById('aa').style.backgroundColor = '#B3A3A1';
  
    return () => {
      document.getElementById('aa').style.backgroundColor = 'transparent';
    };
  }, []);

  return (
    <>
      <aside className='cart' id="aa">
        <span className='carts-offers'>
        {favorites.map((favorite) => (
              <CartGood key={favorite.id} img={favorite.image} price={favorite.price} />
            ))}
        </span>
      </aside>
    </>
  );
}