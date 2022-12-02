import '../Components_css/Cart.css';
import bedroom1 from '../FurniturePictures/bed1.jpeg';
import bedroom2 from '../FurniturePictures/bed2.jpeg';
import bedroom3 from '../FurniturePictures/bed3.png';
import bedroom4 from '../FurniturePictures/bed4.jpeg';
import ToCartButtom from '../UI/Buttons/plus_minus_good.png';
import Trash from '../UI/Buttons/trash.png';
import { useState } from 'react';
import { useEffect } from 'react';

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

function makeCartGood(img, price) {
  return (
    <div className='cartt-goods'>
      <img src={img} alt={'*'} className='cart-imgs' />
      <span className='img-menu'>
        <div className='img-price'>{price}₽</div>
      </span>

      <span className='cart-buttons'>
        {LikeButton()}
        <button className='button-for-goods'>
          <img
            src={ToCartButtom}
            color='white'
            alt='to cart'
            className='img-plus-minus-button'
          />
        </button>
        <button className='button-trash'>
          <img src={Trash} alt='to cart' className='img-trash' />
        </button>
      </span>
    </div>
  );
}

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
          {makeCartGood(bedroom1, '40 000')}
          {makeCartGood(bedroom2, '50 000')}
          {makeCartGood(bedroom3, '45 000')}
          {makeCartGood(bedroom4, '60 000')}
        </span>
      </aside>
    </>
  );
}

