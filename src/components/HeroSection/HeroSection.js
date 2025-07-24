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
            <div className="rocket-container">
              {/* Main Rocket */}
              <div className="rocket">
                <div className="rocket__body">
                  <div className="rocket__window"></div>
                  <div className="rocket__stripe"></div>
                </div>
                <div className="rocket__fins">
                  <div className="fin fin--left"></div>
                  <div className="fin fin--right"></div>
                </div>
                <div className="rocket__flame">
                  <div className="flame-inner"></div>
                </div>
              </div>
              
              {/* Orbit Rings */}
              <div className="orbit-ring orbit-ring--1"></div>
              <div className="orbit-ring orbit-ring--2"></div>
              <div className="orbit-ring orbit-ring--3"></div>
              
              {/* Floating Cards */}
              <div className="floating-elements">
                <div className="floating-card floating-card--1">
                  <div className="card-content">
                    <div className="card-icon"></div>
                    <div className="card-lines">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="floating-card floating-card--2">
                  <div className="card-content">
                    <div className="card-chart">
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                    </div>
                  </div>
                </div>
                <div className="floating-card floating-card--3">
                  <div className="card-content">
                    <div className="card-graph">
                      <svg viewBox="0 0 40 20" className="graph-line">
                        <path d="M2,15 Q10,5 18,8 T38,6" stroke="currentColor" fill="none" strokeWidth="2"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tech Person */}
              <div className="tech-person">
                <div className="person-head">
                  <div className="person-hair"></div>
                  <div className="person-face"></div>
                </div>
                <div className="person-body">
                  <div className="person-shirt"></div>
                </div>
                <div className="person-arms">
                  <div className="arm arm--left"></div>
                  <div className="arm arm--right"></div>
                </div>
                <div className="person-legs">
                  <div className="leg leg--left"></div>
                  <div className="leg leg--right"></div>
                </div>
              </div>
              
              {/* Background Elements */}
              <div className="bg-elements">
                <div className="bg-dot bg-dot--1"></div>
                <div className="bg-dot bg-dot--2"></div>
                <div className="bg-dot bg-dot--3"></div>
                <div className="bg-line bg-line--1"></div>
                <div className="bg-line bg-line--2"></div>
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