import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from '../assets/images/7f9e82_ac487d7fabbf4c51b844db4d668e56b5.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 0,
      title: "AGAVIC",
      subtitle: "Gestion de patrimoine - Plan d'Epargne Retraite - Bilan Retraite - Epargne Salariale - Prévoyance - Complémentaire Santé",
      label: "Diapo AGAVIC"
    },
    {
      id: 1,
      title: "Épargne Salariale",
      subtitle: "Solutions d'épargne pour votre entreprise",
      label: "Diapo épargne salariale"
    },
    {
      id: 2,
      title: "Épargne Retraite",
      subtitle: "Préparez votre retraite en toute sérénité",
      label: "Diapo épargne retraite"
    },
    {
      id: 3,
      title: "Prévoyance - Complémentaire Santé",
      subtitle: "Protégez-vous et votre famille",
      label: "Diapo Prevoyance - Complémentaire Santé"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
             style={{ backgroundImage: `url(${heroImage})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60 backdrop-blur-[1px]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-4xl backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wide bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl font-light italic leading-relaxed text-blue-100 drop-shadow-lg">
            {slides[currentSlide].subtitle}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-all duration-300 z-20 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 shadow-2xl"
        aria-label="Précédent"
      >
        <ChevronLeft size={48} className="drop-shadow-lg" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-all duration-300 z-20 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 shadow-2xl"
        aria-label="Suivant"
      >
        <ChevronRight size={48} className="drop-shadow-lg" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 shadow-2xl">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 shadow-lg ${
              currentSlide === index
                ? 'bg-gradient-to-r from-yellow-400 to-amber-400 scale-125 shadow-yellow-400/50'
                : 'bg-white/50 hover:bg-white/75 hover:scale-110'
            }`}
            aria-label={slide.label}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

