import addToCartButtom from '../UI/Buttons/CatalogPage/add_to_cart.png';
import { useState, React, useEffect, useRef, useCallback } from 'react';
// import { CartGood } from './CartGood.js';
// import { ajaxService } from '../services/ajaxService';

const LikeButton = () => {
  const [liked, setLiked] = useState(null);
  return (
    <button
      onClick={() => setLiked(!liked)}
      className={
        liked ? 'button-like-for-goods-active' : 'button-like-for-goods'
      }
    >
      ♥
    </button>
  );
};

export function CatalogGood({ img, price }) {
  const [isSending, setIsSending] = useState(false);

  const sendRequest = useCallback(async () => {
    if (isSending) return;
    setIsSending(true);
    fetch('http://127.0.0.1:8000/api/carts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ price: price, image: img }),
    }).then(() => {
      console.log(JSON.stringify({ price: price, image: img }));
    });
    setIsSending(false);
  }, [isSending]);

  return (
    <div className='catalog-goods'>
      <img src={img} alt={'*'} className='catalog-imgs' />
      <span className='img-menu'>
        <div className='img-price'>{price}₽</div>
        <LikeButton />
      </span>
      <button
        className='button-for-goods'
        onClick={sendRequest}
      >
        <img
          src={addToCartButtom}
          color='red'
          alt='add to cart'
          className='img-add-to-cart-button'
        />
      </button>
    </div>
  );
}





        // onClick={() => {
        //   fetch('http://127.0.0.1:8000/api/carts/', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ 'price': price, 'image': img }),
        //   }).then(data => {
        //     console.log(data);
        //   });
        // }}
        // onClick={() => {

        //   addCart([...carts, <CartGood img={img} price={price}/>]);
        //   console.log(carts);
        // }}
