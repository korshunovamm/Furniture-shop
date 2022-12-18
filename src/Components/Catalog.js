import { Link } from 'react-router-dom';
import { React, useEffect, useState } from 'react';

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

import '../Components_css/Catalog.css';
import ArrowLeft from '../UI/Icons/CatalogPage/arrowLeft.png';
import ArrowRight from '../UI/Icons/CatalogPage/arrowRight.png';

import { CatalogGood } from './CatalogGood';

export function Catalog() {
  // const [carts, setCarts] = useState([]);

  // useEffect(() => {
  //   fetch('http://127.0.0.1:8000/api/carts/')
  //     .then((responce) => responce.json())
  //     .then((data) => setCarts(data));
  // }, []);

  // console.log(carts);

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

          <div className='Catalog'> Catalog</div>

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
            <CatalogGood img={bedroom1} price={40000} />
            <CatalogGood img={bedroom2} price={50000} />
            <CatalogGood img={bedroom3} price={45000} />
            <CatalogGood img={bedroom4} price={60000} />
          </div>
          <div className='content-row'>
            <CatalogGood img={kitchen1} price={60000} />
            <CatalogGood img={kitchen2} price={60000} />
            <CatalogGood img={kitchen3} price={60000} />
            <CatalogGood img={kitchen4} price={60000} />
          </div>{' '}
          <div className='content-row'>
            <CatalogGood img={living1} price={60000} />
            <CatalogGood img={living2} price={60000} />
            <CatalogGood img={living3} price={60000} />
            <CatalogGood img={living4} price={60000} />
          </div>{' '}
          <div className='content-row'>
            <CatalogGood img={wardrobe1} price={60000} />
            <CatalogGood img={wardrobe2} price={60000} />
            <CatalogGood img={wardrobe3} price={60000} />
            <CatalogGood img={wardrobe4} price={60000} />
          </div>
        </div>
      </aside>
    </>
  );
}
