import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import image1 from '../assets/images/1d0c07_3182ef4a1e514fadbb1e9a400c4462f3~mv2.avif';
import image2 from '../assets/images/1d0c07_e278a02287174f2ca38d9686669395ac~mv2.avif';
import image3 from '../assets/images/7f9e82_6a26551fdc7c4ec081f551dcbe79e47c~mv2.avif';
import image4 from '../assets/images/1d0c07_52e80bab4b2149e8b59a31719b007fb9.jpg';

const HeroSection = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const slides = [
    {
      id: 0,
      image: image1,
      title: "AGAVIC",
      subtitle: "Gestion de patrimoine - Plan d'Epargne Retraite - Bilan Retraite - Epargne Salariale - Prévoyance - Complémentaire Santé",
      label: "Diapo AGAVIC"
    },
    {
      id: 1,
      image: image2,
      title: "Épargne Salariale",
      subtitle: "Solutions d'épargne pour votre entreprise",
      label: "Diapo épargne salariale"
    },
    {
      id: 2,
      image: image3,
      title: "Épargne Retraite",
      subtitle: "Préparez votre retraite en toute sérénité",
      label: "Diapo épargne retraite"
    },
    {
      id: 3,
      image: image4,
      title: "Prévoyance - Complémentaire Santé",
      subtitle: "Protégez-vous et votre famille",
      label: "Diapo Prevoyance - Complémentaire Santé"
    }
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="h-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-screen -ml-0">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="h-screen pl-0">
              <div
                className="relative h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
                  <div className="max-w-4xl backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wide bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl font-light italic leading-relaxed text-blue-100 drop-shadow-lg">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden md:flex left-8 text-white hover:text-yellow-400 transition-all duration-300 z-20 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 shadow-2xl size-16" />
        <CarouselNext className="hidden md:flex right-8 text-white hover:text-yellow-400 transition-all duration-300 z-20 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 shadow-2xl size-16" />
      </Carousel>

      {/* Indicateurs de points */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index + 1
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Aller à la diapositive ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

