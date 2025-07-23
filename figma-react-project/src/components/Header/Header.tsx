import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="app__header">
      <div className="container">
        <div className="logo">
          <h2>Your Logo</h2>
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <li>
              <a href="#home" className="nav__link active">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="nav__link">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;