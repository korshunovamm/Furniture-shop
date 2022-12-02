import { Link } from 'react-router-dom';
import { React } from 'react';

import '../Components_css/Service.css';

import ArrowLeft from '../UI/Icons/CatalogPage/arrowLeft.png';
import ArrowRight from '../UI/Icons/CatalogPage/arrowRight.png';


export function Service() {
  return (
    <>
      <aside className='service'>
        <div className='service-header'>
          <header className='header-catalog'>
            <div className='main-ref'>
              <Link
                to='/catalog'
                style={{ color: '#B3A3A1' }}
                className='main-ref-link'
              >
                <img src={ArrowLeft} alt={'<'} id='arrowleft-on-page-service' />
                <span className='main-ref-name' id='catalog-ref-from-service'>
                  Catalog
                </span>
              </Link>
            </div>

            <div id='Catalog'> Service</div>

            <div className='main-ref'>
              <Link
                to='/main'
                style={{ color: '#B3A3A1' }}
                className='service-ref-link'
              >
                <span className='main-ref-name'>Main</span>
                <img src={ArrowRight} alt={'>'} />
              </Link>
            </div>
          </header>

          <div className='catalog-nav-links'>
            <nav className='catalog-nav-links-wrapper'>
              {['shipping and Payment', 'favorites', 'cart'].map((NavLink) => (
                <div id={`catalog-nav-${NavLink.replace(' ', '')}`}>
                  <Link
                    to={`/service/${NavLink}`}
                    style={{ color: '#B3A3A1', textDecoration: 'none' }}
                  >
                    <span className='catalog-nav-links-link'>
                      {NavLink.charAt(0).toUpperCase() + NavLink.slice(1)}
                    </span>
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}
