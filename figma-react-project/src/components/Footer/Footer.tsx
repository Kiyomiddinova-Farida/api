import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="app__footer">
      <div className="container">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <p>Built with React + TypeScript + SCSS</p>
      </div>
    </footer>
  );
};

export default Footer;