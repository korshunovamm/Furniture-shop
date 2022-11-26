import { Link, useLocation } from 'react-router-dom';

import '../Components_css/LogIN.css';
import ArrowLeft from '../UI/Icons/CatalogPage/arrowLeft.png';
import { CreateProfile } from './CreateProfile';
import SignUp from '../UI/Buttons/sign_up.png'

export function LogIN() {
  return (
    <>
      <div className='modal-container'>
        <div className='modal'>
          <div className='return-to-main'>
            <Link to='/main'>
              <img src={ArrowLeft} alt={'<'} className='return-to-main-arrow' />
            </Link>
          </div>

          <aside className='log-in-content'>
            <div className='log-in-form'>
              <h1 className='log-in-form-header'>Log In</h1>
              <CreateProfile />
            </div>

            <div className='sign-up-form'>
              <div className='sign-up-form-header'>
              <h1 className='sign-up-form-h'>New in</h1>
              <h2 className='sign-up-form-h1'>Sweet Home?</h2>
              </div>
              <div className='sign-up-form-h2-wrapper'>
                <span className='sign-up-form-h2'>get a 15% discount on your</span>
                <span className='sign-up-form-h2'>first purchase upon</span>
                <span className='sign-up-form-h2'>registration</span>
              </div>
              <button className='sign-up-button'>
                <img src={SignUp} alt='SignUp' />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
