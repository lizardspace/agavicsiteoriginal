import React, { useState } from 'react';
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

  return (
    <section className="relative h-screen bg-cover bg-center bg-no-repeat" 
             style={{ backgroundImage: `url(${heroImage})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wide">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl font-light italic leading-relaxed">
            {slides[currentSlide].subtitle}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors z-20"
        aria-label="Précédent"
      >
        <ChevronLeft size={48} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors z-20"
        aria-label="Suivant"
      >
        <ChevronRight size={48} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-yellow-400' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={slide.label}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

