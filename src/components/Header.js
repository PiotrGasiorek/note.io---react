import React from 'react';
import phone from '../gallery/phone.png'

function Header() {
  return (
    <header className="header container section">
      <h1 className='header__title title title--lg'>
        Best app for taking notes
      </h1>
      <h2 className='header__title title title--md'>
        Now for free
      </h2>
      <img className='header__img' src={phone} alt="Phone"/>
    </header>
  );
}

export default Header;
