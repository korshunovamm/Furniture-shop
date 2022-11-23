import { Link, redirect, useLocation } from 'react-router-dom';
import { useEffect, useState, React } from 'react';

import '../Components_css/Catalog.css';
import ArrowLeft from '../UI/Icons/CatalogPage/arrowLeft.png';
import ArrowRight from '../UI/Icons/CatalogPage/arrowRight.png';
import addToCartButtom from '../UI/Buttons/CatalogPage/add_to_cart.png';

import bedroom1 from '../FurniturePictures/bed1.jpeg';
import bedroom2 from '../FurniturePictures/bed2.jpeg';
import bedroom3 from '../FurniturePictures/bed3.png';
import bedroom4 from '../FurniturePictures/bed4.jpeg';

import kitchen1 from '../FurniturePictures/kitchen1.png';
import kitchen2 from '../FurniturePictures/kitchen2.jpeg';
import kitchen3 from '../FurniturePictures/kitchen3.png';
import kitchen4 from '../FurniturePictures/kitchen4.jpeg';

import living1 from '../FurniturePictures/living1.jpeg';
import living2 from '../FurniturePictures/living2.jpeg';
import living3 from '../FurniturePictures/living3.jpeg';
import living4 from '../FurniturePictures/living4.jpeg';

import wardrobe1 from '../FurniturePictures/wardrobe1.jpeg';
import wardrobe2 from '../FurniturePictures/wardrobe2.jpeg';
import wardrobe3 from '../FurniturePictures/wardrobe3.jpeg';
import wardrobe4 from '../FurniturePictures/wardrobe4.jpeg';


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

export function Catalog() {
  function makeCatalogGood(img, price) {
    return (
      <div className='catalog-goods'>
        <img src={img} alt={'*'} className='catalog-imgs' />
        <span className='img-menu'>
          <div className='img-price'>{price}₽</div>
          {LikeButton()}
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

  return (
    <>
      <aside className='catalog'>
        <header className='header-catalog'>
          <div className='main-ref'>
            <Link
              to='/main'
              style={{ color: '#B3A3A1' }}
              className='main-ref-link'
            >
              <img src={ArrowLeft} alt={'<'} />
              <span className='main-ref-name'>Main</span>
            </Link>
          </div>

          <div id='Catalog'> Catalog</div>

          <div className='main-ref'>
            <Link
              to='/service'
              style={{ color: '#B3A3A1' }}
              className='service-ref-link'
            >
              <span className='main-ref-name'>Service</span>
              <img src={ArrowRight} alt={'>'} />
            </Link>
          </div>
        </header>

        <div className='catalog-nav-links'>
          <nav className='catalog-nav-links-wrapper'>
            {['living Room', 'bedroom', 'kitchen', 'wardrobe'].map(
              (NavLink) => (
                <div id={`catalog-nav-${NavLink.replace(' ', '')}`}>
                  <Link
                    to=''
                    style={{ color: '#B3A3A1', textDecoration: 'none' }}
                  >
                    <span className='catalog-nav-links-link'>
                      {NavLink.charAt(0).toUpperCase() + NavLink.slice(1)}
                    </span>
                  </Link>
                </div>
              )
            )}
          </nav>
        </div>

        <div className='content'>
          <div className='content-row'>
            {makeCatalogGood(bedroom1, '40 000')}
            {makeCatalogGood(bedroom2, '50 000')}
            {makeCatalogGood(bedroom3, '45 000')}
            {makeCatalogGood(bedroom4, '60 000')}
          </div>
          <div className='content-row'>
            {makeCatalogGood(kitchen1, '40 000')}
            {makeCatalogGood(kitchen2, '50 000')}
            {makeCatalogGood(kitchen3, '45 000')}
            {makeCatalogGood(kitchen4, '60 000')}
          </div>{' '}
          <div className='content-row'>
            {makeCatalogGood(living1, '40 000')}
            {makeCatalogGood(living2, '50 000')}
            {makeCatalogGood(living3, '45 000')}
            {makeCatalogGood(living4, '60 000')}
          </div>{' '}
          <div className='content-row'>
            {makeCatalogGood(wardrobe1, '40 000')}
            {makeCatalogGood(wardrobe2, '50 000')}
            {makeCatalogGood(wardrobe3, '45 000')}
            {makeCatalogGood(wardrobe4, '60 000')}
          </div>
        </div>
      </aside>
    </>
  );
}
