import React from 'react';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__badge">
              <span className="screen-size">1920 × 100</span>
            </div>
            <div className="hero__subtitle">NEXT GENERATION PLATFORM</div>
            <h1 className="hero__title">
              Artificial intelligence<br />
              & Syber security
            </h1>
            <p className="hero__description">
              Lorem Ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and
              visual mockups.
            </p>
            <div className="hero__actions">
              <button className="btn btn--primary">Get Started</button>
              <button className="btn btn--secondary">
                <span className="play-icon">▶</span>
                Watch Video
              </button>
            </div>
          </div>
          
          <div className="hero__visual">
            <div className="rocket-container">
              <div className="rocket">
                <div className="rocket__body"></div>
                <div className="rocket__window"></div>
                <div className="rocket__fins"></div>
                <div className="rocket__flame"></div>
              </div>
              <div className="orbit-ring orbit-ring--1"></div>
              <div className="orbit-ring orbit-ring--2"></div>
              <div className="orbit-ring orbit-ring--3"></div>
              
              <div className="floating-elements">
                <div className="floating-card floating-card--1">
                  <div className="card-icon"></div>
                </div>
                <div className="floating-card floating-card--2">
                  <div className="card-icon"></div>
                </div>
                <div className="floating-card floating-card--3">
                  <div className="card-icon"></div>
                </div>
              </div>
              
              <div className="tech-person">
                <div className="person-body"></div>
                <div className="person-head"></div>
                <div className="person-arms"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero__logos">
          <div className="logo-item">
            <span className="logo-text">Logo</span>
            <span className="logo-company">ipsum</span>
            <span className="logo-subtitle">Tech & Co.</span>
          </div>
          <div className="logo-item">
            <span className="logo-text">Logo</span>
            <span className="logo-company">ipsum</span>
          </div>
          <div className="logo-item">
            <span className="logo-text">logo</span>
            <span className="logo-company">ipsum</span>
          </div>
          <div className="logo-item">
            <span className="logo-text">logoipsum</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;