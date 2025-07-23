import React from 'react';
import './Hero.scss';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h1 className="hero__title">Welcome to Your Figma Design</h1>
      <p className="hero__subtitle">
        This is a modern React + SCSS project ready for your Figma design implementation.
        Share your design and I'll help you bring it to life!
      </p>
      <a href="#get-started" className="hero__button">
        Get Started
      </a>
    </section>
  );
};

export default Hero;