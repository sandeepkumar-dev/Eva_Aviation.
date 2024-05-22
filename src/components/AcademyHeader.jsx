/* eslint-disable */
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {FaCaretDown} from 'react-icons/fa';
import {FaCaretRight} from 'react-icons/fa6';
import '../styles/AcademyHeader.css';
import logo from '../images/logo.jpg';

const AcademyHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`academy-header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="academy-logo">
        <img src={logo} alt="Eva Aviation Academy Logo" />
        <h1>Eva Aviation Academy</h1>
      </div>
      <nav className={`academy-nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a
          onClick={() => {
            navigate('/academyhome');
            setIsMenuOpen(false);
          }}
        >
          Home
        </a>
        <a
          onClick={() => {
            navigate('/about');
            setIsMenuOpen(false);
          }}
        >
          About
        </a>

        <div className="dropdown">
          <a
            onClick={() => {
              navigate('/course');
              setIsMenuOpen(false);
            }}
          >
            Courses <FaCaretDown className="caret-down-icon" />
          </a>
          <div className="dropdown-menu">
            <a
              onClick={() => {
                navigate('/ppl-course');
                setIsMenuOpen(false);
              }}
            >
              1. Private Pilot Licence
            </a>
            <a
              onClick={() => {
                navigate('/cpl-course');
                setIsMenuOpen(false);
              }}
            >
              2. Commercial Pilot Licence
            </a>
            <a
              onClick={() => {
                navigate('/atpl-course');
                setIsMenuOpen(false);
              }}
            >
              3. Airlines Transport Pilot Licence
            </a>
            <div className="sub-dropdown">
              <a
                onClick={() => {
                  navigate('/type-rating/a320');
                  setIsMenuOpen(false);
                }}
              >
                4. Type Rating <FaCaretRight className="caret-down-icon" />
              </a>
              <div className="sub-dropdown-menu">
                <a
                  onClick={() => {
                    navigate('/type-rating/a320');
                    setIsMenuOpen(false);
                  }}
                >
                  A 320
                </a>
                <a
                  onClick={() => {
                    navigate('/type-rating/atr72');
                    setIsMenuOpen(false);
                  }}
                >
                  ATR 72-600
                </a>
                <a
                  onClick={() => {
                    navigate('/type-rating/b737');
                    setIsMenuOpen(false);
                  }}
                >
                  B737
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          onClick={() => {
            navigate('/enquiry');
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

export default AcademyHeader;
