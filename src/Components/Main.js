import { Link, useLocation } from 'react-router-dom';
import '../Components_css/Main.css';
import SearchIcon from '../UI/Icons/MainPage/search.png';
import CartIcon from '../UI/Icons/MainPage/cart.png';
import ProfileIcon from '../UI/Icons/MainPage/profile.png';
import FrontImg from '../UI/Images/MainPage/front_img.png';
import BackImg from '../UI/Images/MainPage/back_img.png';
import GoToCatalog from '../UI/Buttons/MainPage/go_to_catalog.png';


export function Main() {
  const location = useLocation();
  const mainHeaderNavIcons = {
    search: SearchIcon,
    cart: CartIcon,
    profile: ProfileIcon,
  };

  return (
    <>
      <aside className='canvas'></aside>
      <h id='sweet-home'> SweetHome </h>
      <aside className='main'>

        <nav className='main-nav-links'>
          {['main', 'catalog', 'service'].map((mainHeaderNavLink) => (
            <div
              id={`main-nav-${mainHeaderNavLink}`}
              className={
                location.pathname === `/${mainHeaderNavLink}`
                  ? 'main-nav-link-active'
                  : 'main-nav-link'
              }
            >
              <Link to={`/${mainHeaderNavLink}`} style={{ color: '#EBE9E9' }}>
                {mainHeaderNavLink.charAt(0).toUpperCase() +
                  mainHeaderNavLink.slice(1)}
              </Link>
            </div>
          ))}
        </nav>

        <nav className='main-nav-icons'>
          {['search', 'cart', 'profile'].map((mainHeaderNavIcon) => (
            <div
              id={`main-header-nav-${mainHeaderNavIcon}`}
              className={
                location.pathname === `/${mainHeaderNavIcon}`
                  ? 'main-nav-icon-active'
                  : 'main-nav-icon'
              }
            >
              <Link to={mainHeaderNavIcon}>
                <img
                  src={mainHeaderNavIcons[mainHeaderNavIcon]}
                  alt={mainHeaderNavIcon}
                />
              </Link>
            </div>
          ))}
        </nav>


        <section className='main-content'>
          <div className='main-text'>
            <header id='main-content-header'>
              Everything that surround us makes us stronger
            </header>
            <p id='main-content-text'>
              Exclusive designer furniture and fittings. Natural materials and
              individual approach when created, they will give an incomparably
              high level of quality and comfort
            </p>
          </div>

          <button id='main-content-button'>
            <Link to='/catalog'>
              <img src={GoToCatalog} alt='Go to Catalog'></img>
            </Link>
          </button>
        </section>

        <aside className='photos'>
          <picture className='rectangle'>
            <img id='back_img' src={BackImg} alt='img' />
          </picture>
          <picture className='elipse'>
            <img id='front_img' src={FrontImg} alt='img' />
          </picture>
        </aside>
      </aside>
    </>
  );
}
