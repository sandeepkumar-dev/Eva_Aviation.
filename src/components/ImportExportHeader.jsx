/* eslint-disable */
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {FaCaretDown} from 'react-icons/fa';
import '../styles/AcademyHeader.css';
import logo2 from '../images/logo2.jpg';

const ImportExportHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`academy-header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="ie-academy-logo2">
        <img src={logo2} alt=" Logo2" />
        <h1>Eva Aviation Import & Export</h1>
      </div>
      <nav className={`academy-nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a
          onClick={() => {
            navigate('/import&exporthome');
            setIsMenuOpen(false);
          }}
        >
          Home
        </a>
        <a
          onClick={() => {
            navigate('/import&exportabout');
            setIsMenuOpen(false);
          }}
        >
          About
        </a>

        <div className="dropdown">
          <a
            onClick={() => {
              navigate('/our-product');
              setIsMenuOpen(false);
            }}
          >
            Product <FaCaretDown className="caret-down-icon" />
          </a>
          <div className="IEdropdown-menu">
            <a
              onClick={() => {
                navigate('/spiceses');
                setIsMenuOpen(false);
              }}
            >
              Spices
            </a>
          </div>
        </div>

        <a
          onClick={() => {
            navigate('/enquirys');
            setIsMenuOpen(false);
          }}
        >
          Enquiry
        </a>
        <a
          onClick={() => {
            navigate('/');
            setIsMenuOpen(false);
          }}
        >
          MainPage
        </a>
      </nav>
      <div className="academy-menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
    </header>
  );
};

export default ImportExportHeader;
