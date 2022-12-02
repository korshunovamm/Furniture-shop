import '../Components_css/Cart.css';
import wardrobe1 from '../FurniturePictures/wardrobe1.jpeg';
import wardrobe2 from '../FurniturePictures/wardrobe2.jpeg';
import wardrobe3 from '../FurniturePictures/wardrobe3.jpeg';
import wardrobe4 from '../FurniturePictures/wardrobe4.jpeg';
import {  useEffect } from 'react';
import { CartGood } from './CartGood.js'



export function Favorites() {
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
          {CartGood(wardrobe1, '40 000')}
          {CartGood(wardrobe2, '50 000')}
          {CartGood(wardrobe3, '45 000')}
          {CartGood(wardrobe4, '60 000')}
        </span>
      </aside>
    </>
  );
}