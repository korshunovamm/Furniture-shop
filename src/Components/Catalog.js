import { Link } from 'react-router-dom';
import { React, useEffect, useState } from 'react';

import '../Components_css/Catalog.css';
import ArrowLeft from '../UI/Icons/CatalogPage/arrowLeft.png';
import ArrowRight from '../UI/Icons/CatalogPage/arrowRight.png';

import { CatalogGood } from './CatalogGood';

export function Catalog() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/carts/')
      .then((responce) => responce.json())
      .then((data) => setCarts(data));
  }, []);

  console.log(carts);

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
            {carts.map((cart) => (
              <CatalogGood key={cart.id} img={cart.image} price={cart.price} />
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
