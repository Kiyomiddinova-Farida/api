import React, { useState } from 'react';
import './AwardsSection.scss';

const AwardsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const awards = [
    {
      id: 1,
      icon: 'trophy',
      title: 'Naxly as the Winners in Global Agency Awards',
      description: 'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'
    },
    {
      id: 2,
      icon: 'target',
      title: 'Expert Perspective Agency Awards',
      description: 'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'
    },
    {
      id: 3,
      icon: 'briefcase',
      title: 'Business Perspective Global Agency Awards',
      description: 'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'
    },
    {
      id: 4,
      icon: 'chart',
      title: 'Value for Results in Global Agency Awards',
      description: 'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'
    },
    {
      id: 5,
      icon: 'rocket',
      title: 'Global Experience in Agency Awards',
      description: 'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, awards.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, awards.length - 2)) % Math.max(1, awards.length - 2));
  };

  return (
    <section className="awards">
      <div className="container">
        <div className="awards__carousel">
          <div 
            className="awards__track"
            style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
          >
            {awards.map((award) => (
              <div key={award.id} className="award-card">
                <div className="award-card__icon">
                  <div className="icon-circle">
                    <div className={`icon-svg icon-svg--${award.icon}`}></div>
                  </div>
                </div>
                <div className="award-card__content">
                  <h3 className="award-card__title">{award.title}</h3>
                  <p className="award-card__description">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="awards__controls">
          <button 
            className="carousel-btn carousel-btn--prev"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <span>‹</span>
          </button>
          
          <div className="carousel-dots">
            {[...Array(Math.max(1, awards.length - 2))].map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentSlide ? 'carousel-dot--active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            className="carousel-btn carousel-btn--next"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <span>›</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;