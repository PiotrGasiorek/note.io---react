import React from 'react';
import logo from '../gallery/logo.svg';

function Nav(props) {
  return (
    <nav className="nav container">
      <img onClick={props.toggleBoard} src={logo} alt="Apps logo" className="nav__logo"/>
    </nav>
  );
}

export default Nav;
