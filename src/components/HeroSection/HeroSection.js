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
              & Cyber security
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
            <div className="visual-container">
              {/* Main Rocket Illustration */}
              <div className="rocket-illustration">
                <div className="rocket-main">
                  <div className="rocket-body">
                    <div className="rocket-window"></div>
                    <div className="rocket-details">
                      <div className="detail-line"></div>
                      <div className="detail-line"></div>
                    </div>
                  </div>
                  <div className="rocket-fins">
                    <div className="fin-left"></div>
                    <div className="fin-right"></div>
                  </div>
                  <div className="rocket-base"></div>
                </div>
                <div className="launch-platform">
                  <div className="platform-base"></div>
                  <div className="platform-support"></div>
                </div>
              </div>
              
              {/* Circular Elements */}
              <div className="circular-elements">
                <div className="circle circle--large"></div>
                <div className="circle circle--medium"></div>
                <div className="circle circle--small"></div>
              </div>
              
              {/* Data Cards */}
              <div className="data-cards">
                <div className="card card--dashboard">
                  <div className="card-header"></div>
                  <div className="card-content">
                    <div className="data-row"></div>
                    <div className="data-row"></div>
                    <div className="data-row"></div>
                  </div>
                </div>
                <div className="card card--chart">
                  <div className="chart-container">
                    <div className="chart-bar" style={{height: '60%'}}></div>
                    <div className="chart-bar" style={{height: '100%'}}></div>
                    <div className="chart-bar" style={{height: '40%'}}></div>
                    <div className="chart-bar" style={{height: '80%'}}></div>
                  </div>
                </div>
                <div className="card card--analytics">
                  <div className="analytics-circle">
                    <div className="circle-progress"></div>
                    <div className="circle-center">85%</div>
                  </div>
                </div>
              </div>
              
              {/* Person Character */}
              <div className="character">
                <div className="character-head">
                  <div className="hair"></div>
                  <div className="face">
                    <div className="eyes">
                      <div className="eye eye--left"></div>
                      <div className="eye eye--right"></div>
                    </div>
                    <div className="mouth"></div>
                  </div>
                </div>
                <div className="character-body">
                  <div className="shirt"></div>
                  <div className="arms">
                    <div className="arm arm--left"></div>
                    <div className="arm arm--right"></div>
                  </div>
                </div>
                <div className="character-legs">
                  <div className="leg leg--left"></div>
                  <div className="leg leg--right"></div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="decorative-elements">
                <div className="deco-dot deco-dot--1"></div>
                <div className="deco-dot deco-dot--2"></div>
                <div className="deco-dot deco-dot--3"></div>
                <div className="deco-line deco-line--1"></div>
                <div className="deco-line deco-line--2"></div>
                <div className="deco-triangle"></div>
                <div className="deco-square"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero__logos">
          <div className="logo-item">
            <div className="logo-icon logo-icon--orange">
              <span>○</span>
            </div>
            <div className="logo-text">
              <span className="logo-name">Logo</span>
              <span className="logo-company">ipsum</span>
              <span className="logo-subtitle">Tech & Co.</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-icon logo-icon--multi">
              <span>◐</span>
            </div>
            <div className="logo-text">
              <span className="logo-name">Logo</span>
              <span className="logo-company">ipsum</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-icon logo-icon--blue">
              <span>◯</span>
            </div>
            <div className="logo-text">
              <span className="logo-name">logo</span>
              <span className="logo-company">ipsum</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-icon logo-icon--purple">
              <span>◆</span>
            </div>
            <div className="logo-text">
              <span className="logo-name">logoipsum</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;