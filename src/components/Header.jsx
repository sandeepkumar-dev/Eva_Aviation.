/* eslint-disable */
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

import '../styles/Header.css';
import logo from '../images/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`mainhome-header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="mainhome-logo">
        <img src={logo} alt="Eva Aviation Academy Logo" />
        <h1>Eva Aviation Academy</h1>
      </div>
      <nav className={`mainhome-nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a
          onClick={() => {
            navigate('/');
            setIsMenuOpen(false);
          }}
        >
          Home
        </a>
        <a
          onClick={() => {
            navigate('/academyhome');
            setIsMenuOpen(false);
          }}
        >
          Academy
        </a>
        <a
          onClick={() => {
            navigate('/import&exporthome');
            setIsMenuOpen(false);
          }}
        >
          Import/Export
        </a>
        <a
          onClick={() => {
            navigate('/contact');
            setIsMenuOpen(false);
          }}
        >
          Contact Us
        </a>
      </nav>
      <div className="mainhome-menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
    </header>
  );
};

export default Header;
