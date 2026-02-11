import React from 'react';
import Section from '../components/ui/Section';
import Heading from '../components/ui/Heading';
import Card from '../components/layout/Card';
import ImageCarousel from '../components/layout/ImageCarousel';
import Servicios from '../components/layout/Servicios';
import primeraFoto from '../img/primeraFoto.jpeg';
import segundaFoto from '../img/segundaFoto.jpeg';
import terceraFoto from '../img/terceraFoto.jpeg';

const Home = () => {
  return (
    <div>
      {/* Three Large Cards Section */}
      <Section background="default" padding="sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {[primeraFoto, segundaFoto, terceraFoto].map((img, index) => (
            <div key={index} className="aspect-[3/4] bg-white dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-600 rounded-lg overflow-hidden">
              <img src={img} alt="Servicio" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </Section>

      {/* Five Square Icons Section */}
      <Section background="default" padding="sm">
        {/* Heading above icons */}
        <div className="text-center mb-12">
          <Heading level={2} className="text-3xl md:text-4xl">
            Servicios
          </Heading>
        </div>

        <Servicios />
      </Section>

      {/* Image Carousel Section */}
      <ImageCarousel />
    </div>
  );
};

export default Home;
