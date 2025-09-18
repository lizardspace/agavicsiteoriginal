import React from 'react';
import HeroSection from '../components/HeroSection';
import ExpertiseSection from '../components/ExpertiseSection';
import VideoSection from '../components/VideoSection';
import NewsSection from '../components/NewsSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ExpertiseSection />
      <VideoSection />
      <NewsSection />
      <ContactSection />
    </div>
  );
};

export default Home;