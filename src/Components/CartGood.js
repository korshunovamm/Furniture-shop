import ToCartButtom from '../UI/Buttons/plus_minus_good.png';
import Trash from '../UI/Buttons/trash.png';
import { useState, useCallback } from 'react';

const LikeButton = ({ img, price }) => {
  const [liked, setLiked] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendRequest = useCallback(async () => {
    if (isSending) return;
    setIsSending(true);
    setLiked(!liked);
    if (liked) {
      fetch('http://127.0.0.1:8000/api/favorites/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ price: price, image: img }),
      }).then(() => {
        console.log(JSON.stringify({ price: price, image: img }));
      });
    }
    setIsSending(false);
  }, [isSending]);

  return (
    <button
      onClick={sendRequest}
      className={
        liked ? 'button-like-for-goods-active' : 'button-like-for-goods'
      }
    >
      ♥
    </button>
  );
};

export function CartGood({ img, price }) {
  return (
    <div className='cartt-goods'>
      <img src={img} alt={'*'} className='cart-imgs' />
      <span className='img-menu'>
        <div className='img-price'>{price}₽</div>
      </span>

      <span className='cart-buttons'>
        <LikeButton img={img} price={price} />
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
