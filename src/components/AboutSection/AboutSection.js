import React from 'react';
import './AboutSection.scss';

const AboutSection = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <div className="about__visual">
            <div className="brain-container">
              <div className="brain-platform">
                <div className="platform-base"></div>
                <div className="platform-glow"></div>
              </div>
              
              <div className="brain">
                <div className="brain-hemisphere brain-hemisphere--left"></div>
                <div className="brain-hemisphere brain-hemisphere--right"></div>
                <div className="brain-stem"></div>
              </div>
              
              <div className="neural-network">
                <div className="node node--1"></div>
                <div className="node node--2"></div>
                <div className="node node--3"></div>
                <div className="node node--4"></div>
                <div className="node node--5"></div>
                <div className="node node--6"></div>
                <div className="connection connection--1"></div>
                <div className="connection connection--2"></div>
                <div className="connection connection--3"></div>
                <div className="connection connection--4"></div>
              </div>
              
              <div className="holographic-display">
                <div className="display-screen"></div>
                <div className="display-data"></div>
              </div>
              
              <div className="floating-icons">
                <div className="floating-icon floating-icon--1">
                  <div className="icon-eye"></div>
                </div>
                <div className="floating-icon floating-icon--2">
                  <div className="icon-eye"></div>
                </div>
                <div className="floating-icon floating-icon--3">
                  <div className="icon-eye"></div>
                </div>
                <div className="floating-icon floating-icon--4">
                  <div className="icon-eye"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about__text">
            <h2 className="about__title">
              Apply AI, Deep Learning<br />
              and Data Science to solve
            </h2>
            <p className="about__description">
              Lorem Ipsum is placeholder text commonly used in the
              graphic, print, and publishing industries for previewing
              layouts and visual mockups.
            </p>
            <button className="btn btn--primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;