import React, { useState } from 'react';
import Button from '../ui/Button';
import carrouselArriba from '../../img/carrouselArriba.jpeg';
import carrouselArriba2 from '../../img/carrouselArriba2.jpeg';
import carrouselArriba3 from '../../img/carrouselArriba3.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [carrouselArriba, carrouselArriba2, carrouselArriba3];
  const slides = [
    {
      title: "This is a paragraph text block",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper nulla at commodo aliquam. Maecenas eu cursus odio nunc fermentum velit sed.",
    },
    {
      title: "Transformamos tu negocio",
      description: "Con estrategias de marketing digital innovadoras que generan resultados medibles y sostenibles.",
    },
    {
      title: "Impulsa tu marca",
      description: "Alcanza tus objetivos con nuestro equipo experto en marketing y comunicación digital.",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      style={{
        backgroundColor: 'var(--secciones)',
        backgroundImage: `url(${images[currentSlide]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="relative min-h-[400px] flex items-start justify-center pt-36 pb-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative h-full flex flex-col items-center justify-start gap-12">
        {/* Previous button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white dark:bg-neutral-700 rounded-full shadow-lg hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors z-10"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Slide content */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h1 style={{color: 'var(--texto)'}} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {slides[currentSlide].title}
          </h1>
          
               <p style={{color: 'var(--texto)'}} className="text-base md:text-lg mt-12 mb-8 leading-relaxed opacity-80">
            {slides[currentSlide].description}
          </p>

          {/* ...sin botón ni dots... */}
        </div>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white dark:bg-neutral-700 rounded-full shadow-lg hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors z-10"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
