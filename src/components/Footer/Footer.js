import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__main">
            <div className="footer__brand">
              <div className="footer__logo">
                <div className="logo-icon">
                  <div className="robot-face">
                    <div className="robot-eye"></div>
                    <div className="robot-eye"></div>
                    <div className="robot-mouth"></div>
                  </div>
                </div>
                <span className="logo-text">Artificial Intelligence</span>
              </div>
              <p className="footer__description">
                Lorem Ipsum is placeholder text commonly used in the graphic, print, and
                publishing industries for previewing layouts and visual mockups.
              </p>
              <div className="footer__contact">
                <div className="contact-item">
                  <span className="contact-icon">✉</span>
                  <span>Company@gmail.com.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>Phone: (064) 332-1233</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>450 Wall Street, USA, New York</span>
                </div>
              </div>
            </div>
            
            <div className="footer__links">
              <div className="footer__column">
                <h4 className="footer__column-title">INFORMATION</h4>
                <ul className="footer__list">
                  <li><a href="#" className="footer__link">New Collection</a></li>
                  <li><a href="#" className="footer__link">About Store</a></li>
                  <li><a href="#" className="footer__link">Contact Us</a></li>
                  <li><a href="#" className="footer__link">Latest News</a></li>
                  <li><a href="#" className="footer__link">Our Sitemap</a></li>
                  <li><a href="#" className="footer__link">Orders History</a></li>
                </ul>
              </div>
              
              <div className="footer__column">
                <h4 className="footer__column-title">FOOTER MENU</h4>
                <ul className="footer__list">
                  <li><a href="#" className="footer__link">Instagram profile</a></li>
                  <li><a href="#" className="footer__link">New Collection</a></li>
                  <li><a href="#" className="footer__link">Contact Us</a></li>
                  <li><a href="#" className="footer__link">Latest News</a></li>
                  <li><a href="#" className="footer__link">Terms & Conditions</a></li>
                  <li><a href="#" className="footer__link">Purchase Theme</a></li>
                </ul>
              </div>
              
              <div className="footer__column">
                <h4 className="footer__column-title">USEFUL LINKS</h4>
                <ul className="footer__list">
                  <li><a href="#" className="footer__link">Instagram profile</a></li>
                  <li><a href="#" className="footer__link">New Collection</a></li>
                  <li><a href="#" className="footer__link">Contact Us</a></li>
                  <li><a href="#" className="footer__link">Latest News</a></li>
                  <li><a href="#" className="footer__link">Terms & Conditions</a></li>
                  <li><a href="#" className="footer__link">Purchase Theme</a></li>
                </ul>
              </div>
              
              <div className="footer__column">
                <h4 className="footer__column-title">ABOUT THE STORE</h4>
                <p className="footer__column-description">
                  Lorem Ipsum is placeholder text commonly used in the graphic, print, and
                  publishing industries for previewing layouts and visual mockups.
                </p>
                <div className="footer__website">
                  <strong>www.company.com</strong>
                </div>
                <div className="footer__social">
                  <a href="#" className="social-link" aria-label="Facebook">📘</a>
                  <a href="#" className="social-link" aria-label="Instagram">📷</a>
                  <a href="#" className="social-link" aria-label="Twitter">🐦</a>
                  <a href="#" className="social-link" aria-label="LinkedIn">💼</a>
                  <a href="#" className="social-link" aria-label="YouTube">📺</a>
                </div>
                <div className="footer__language">
                  <select className="language-select">
                    <option value="en">🌐 English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;