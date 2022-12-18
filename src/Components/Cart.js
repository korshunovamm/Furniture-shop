import '../Components_css/Cart.css';
import { CartGood } from './CartGood.js'
import { useEffect, useState } from 'react';


export function Cart() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/carts/')
      .then((responce) => responce.json())
      .then((data) => setCarts(data));
  }, []);

  console.log(carts);

  useEffect(() => {
  document.getElementById('aa').style.backgroundColor = '#B3A3A1';

  return () => {
    if (document.getElementById('aa')) {
      document.getElementById('aa').style.backgroundColor = 'transparent'
    }
    
  };
}, []);

  return (
    <>
      <aside className='cart' id='aa'>
        <span className='carts-offers'>
        {carts.map((cart) => (
            <CartGood key={cart.id} img={cart.image} price={cart.price} />
          ))}
        </span>
      </aside>
    </>
  );
}

