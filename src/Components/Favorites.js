import '../Components_css/Cart.css';
import wardrobe1 from '../FurniturePictures/wardrobe1.jpeg';
import wardrobe2 from '../FurniturePictures/wardrobe2.jpeg';
import wardrobe3 from '../FurniturePictures/wardrobe3.jpeg';
import wardrobe4 from '../FurniturePictures/wardrobe4.jpeg';
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

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function Favorites() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  // useEffect(() => {
  //   document.getElementById('aa').style.width = '100vw';
  //   document.getElementById('aa').style.backgroundColor = '#B3A3A1';
  // }, [window.innerWidth]);

  return (
    <>
      <aside className='cart'>
        <span className='carts-offers'>
          {makeCartGood(wardrobe1, '40 000')}
          {makeCartGood(wardrobe2, '50 000')}
          {makeCartGood(wardrobe3, '45 000')}
          {makeCartGood(wardrobe4, '60 000')}
        </span>
      </aside>
    </>
  );
}

// useEffect(() => {
//   document.getElementById('aa').style.backgroundColor = '#B3A3A1';

//   return () => {
//     document.getElementById('aa').style.backgroundColor = 'transparent';
//   };
// }, []);
