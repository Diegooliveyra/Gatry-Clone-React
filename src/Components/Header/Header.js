import React from 'react';
import logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
    </header>
  );
};

export default Header;
