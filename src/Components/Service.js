import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState, React } from 'react';


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

export function Service() {
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

        <div className='service-content'>

        </div>
      </aside>
    </>
  );
}
