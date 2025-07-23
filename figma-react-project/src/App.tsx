import React from 'react';
import './styles/App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <div className="container">
          <Hero />
          {/* This is where your Figma design components will go */}
          <section className="content-section">
            <div className="grid grid--3">
              <div className="card">
                <div className="card__header">
                  <h3>Component 1</h3>
                </div>
                <div className="card__body">
                  <p>This is a placeholder component. Replace with your Figma design components.</p>
                  <button className="btn btn--primary">Learn More</button>
                </div>
              </div>
              <div className="card">
                <div className="card__header">
                  <h3>Component 2</h3>
                </div>
                <div className="card__body">
                  <p>This is a placeholder component. Replace with your Figma design components.</p>
                  <button className="btn btn--outline">Learn More</button>
                </div>
              </div>
              <div className="card">
                <div className="card__header">
                  <h3>Component 3</h3>
                </div>
                <div className="card__body">
                  <p>This is a placeholder component. Replace with your Figma design components.</p>
                  <button className="btn btn--secondary">Learn More</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
