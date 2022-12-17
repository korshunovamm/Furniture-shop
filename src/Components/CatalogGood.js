import addToCartButtom from '../UI/Buttons/CatalogPage/add_to_cart.png';
import { useState, React } from 'react';

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

export function CatalogGood({img, price}) {
  return (
    <div className='catalog-goods'>
      <img src={img} alt={'*'} className='catalog-imgs' />
      <span className='img-menu'>
        <div className='img-price'>{price}₽</div>
        <LikeButton />
      </span>
      <button className='button-for-goods'>
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