import React from 'react';
import './TestimonialsSection.scss';

const TestimonialsSection = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__content">
          <div className="testimonials__text">
            <h2 className="testimonials__title">
              What our clients say about our awesome solutions
            </h2>
            <div className="testimonials__description">
              <p>
                To take a trivial example, which of us ever undertakes 
                laborious physical exercise, except to obtain some 
                advantage from it who do not know.
              </p>
              <p>
                Lorem ipsum is placeholder text commonly used in the
                graphic, print, and publishing.
              </p>
              <p>
                Lorem ipsum is placeholder previewing layouts and visual 
                mockups.
              </p>
              <p>
                Lorem ipsum is placeholder text commonly used in the
                graphic, print, and publishing industries for previewing
                layouts and visual mockups.
              </p>
            </div>
          </div>
          
          <div className="testimonials__visual">
            <div className="isometric-container">
              <div className="platform">
                <div className="platform-base"></div>
                <div className="platform-shadow"></div>
              </div>
              
              <div className="data-screens">
                <div className="screen screen--main">
                  <div className="screen-header"></div>
                  <div className="screen-content">
                    <div className="chart-line"></div>
                    <div className="data-points">
                      <div className="data-point data-point--1"></div>
                      <div className="data-point data-point--2"></div>
                      <div className="data-point data-point--3"></div>
                    </div>
                  </div>
                </div>
                
                <div className="screen screen--side">
                  <div className="screen-header"></div>
                  <div className="screen-content">
                    <div className="mini-chart"></div>
                  </div>
                </div>
                
                <div className="screen screen--floating">
                  <div className="floating-data"></div>
                </div>
              </div>
              
              <div className="person-figure">
                <div className="person-body"></div>
                <div className="person-head"></div>
                <div className="person-arms">
                  <div className="arm arm--left"></div>
                  <div className="arm arm--right"></div>
                </div>
                <div className="person-legs">
                  <div className="leg leg--left"></div>
                  <div className="leg leg--right"></div>
                </div>
              </div>
              
              <div className="floating-elements">
                <div className="floating-cube floating-cube--1"></div>
                <div className="floating-cube floating-cube--2"></div>
                <div className="floating-sphere floating-sphere--1"></div>
                <div className="floating-sphere floating-sphere--2"></div>
              </div>
              
              <div className="data-visualization">
                <div className="viz-element viz-element--1"></div>
                <div className="viz-element viz-element--2"></div>
                <div className="viz-element viz-element--3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;