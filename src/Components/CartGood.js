import ToCartButtom from '../UI/Buttons/plus_minus_good.png';
import Trash from '../UI/Buttons/trash.png';
import { useState } from 'react';

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

export function CartGood({img, price}) {
  return (
    <div className='cartt-goods'>
      <img src={img} alt={'*'} className='cart-imgs' />
      <span className='img-menu'>
        <div className='img-price'>{price}₽</div>
      </span>

      <span className='cart-buttons'>
      <LikeButton />
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