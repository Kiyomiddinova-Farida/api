import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import AwardsSection from './components/AwardsSection/AwardsSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import Footer from './components/Footer/Footer';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AwardsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;