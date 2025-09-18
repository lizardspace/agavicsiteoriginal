import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ExpertiseSection from './components/ExpertiseSection';
import VideoSection from './components/VideoSection';
import NewsSection from './components/NewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ExpertiseSection />
      <VideoSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

