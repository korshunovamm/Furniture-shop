import '../Components_css/Cart.css';
import bedroom1 from '../FurniturePictures/bed1.jpeg';
import bedroom2 from '../FurniturePictures/bed2.jpeg';
import bedroom3 from '../FurniturePictures/bed3.png';
import bedroom4 from '../FurniturePictures/bed4.jpeg';
import { CartGood } from './CartGood.js'
import { useEffect } from 'react';


export function Cart() {
  useEffect(() => {
  document.getElementById('aa').style.backgroundColor = '#B3A3A1';

  return () => {
    document.getElementById('aa').style.backgroundColor = 'transparent';
  };
}, []);

  return (
    <>
      <aside className='cart' id='aa'>
        <span className='carts-offers'>
          {CartGood(bedroom1, '40 000')}
          {CartGood(bedroom2, '50 000')}
          {CartGood(bedroom3, '45 000')}
          {CartGood(bedroom4, '60 000')}
        </span>
      </aside>
    </>
  );
}

