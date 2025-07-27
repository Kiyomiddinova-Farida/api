import { useState } from 'react'
import './HeroSection.css'

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-video-wrapper">
          {!isPlaying ? (
            <div className="hero-image">
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop" 
                alt="Modern architectural interior"
              />
              <div className="play-button-overlay">
                <button className="play-button" onClick={handlePlayClick}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="30" fill="rgba(255,255,255,0.9)" />
                    <polygon points="23,18 23,42 41,30" fill="#333" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className="hero-video">
              <video 
                autoPlay 
                controls 
                width="100%" 
                height="100%"
                poster="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop"
              >
                <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroSection