import LogIn from '../UI/Buttons/log_in.png';
import '../Components_css/CreateProfile.css';

export function CreateProfile() {
  const onCreateProfile = (event) => {
    event.preventDefault();

    const inputs = document.querySelectorAll('input');

    const profile = {};
    inputs.forEach((input) => {
      profile[input.name] = input.value;
    });
    // console.log(profile);

    fetch('http://localhost:5000/main/profile', {
      method: 'POST',
      body: JSON.stringify(profile),
      headers: {
        'Content-Type': 'application.json',
      },
    });
  };

  return (
    <aside className='create-profile'>
      <div >
        <form className='roundable-class-form'>
          <div>
            <input className='input-in' name="name" placeholder='Name'></input>
          </div>
          <div>
            <input className='input-in' name="password" placeholder='Password'></input>
          </div>
          <button onClick={onCreateProfile} className='log-in-button'>
            <img src={LogIn} alt='LogIn' />
          </button>
        </form>
      </div>
    </aside>
  );
}
