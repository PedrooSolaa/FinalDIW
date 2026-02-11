import React from 'react';
import Section from '../ui/Section';
import Heading from '../ui/Heading';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María García',
      role: 'CEO, Empresa XYZ',
      comment: 'Excelente servicio, superaron todas nuestras expectativas. Altamente recomendados.',
      rating: 5,
    },
    {
      name: 'Juan Pérez',
      role: 'Director de Marketing',
      comment: 'Profesionales comprometidos y resultados excepcionales. Muy satisfecho con el trabajo realizado.',
      rating: 5,
    },
    {
      name: 'Ana Martínez',
      role: 'Gerente de Producto',
      comment: 'Gran atención al detalle y soporte impecable. Definitivamente volveremos a trabajar juntos.',
      rating: 5,
    },
    {
      name: 'Juan Pérez',
      role: 'Director de Marketing',
      comment: 'Profesionales comprometidos y resultados excepcionales. Muy satisfecho con el trabajo realizado.',
      rating: 5,
    },
  ];

  return (
    <Section background="gray" padding="lg">
      <div className="text-center mb-12">
        <Heading level={2} className="text-3xl md:text-4xl text-texto">
          Lo que dicen nuestros clientes
        </Heading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="rounded-lg p-8 flex flex-col shadow-md bg-white text-texto"
          >
            {/* Rating Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-2xl">⭐</span>
              ))}
            </div>

            {/* Comment */}
            <p className="mb-6 flex-grow text-sm leading-relaxed text-black">
              "{testimonial.comment}"
            </p>

            {/* Author Info */}
            <div className="border-t pt-4 border-texto">
              <p className="font-bold text-sm text-black">
                {testimonial.name}
              </p>
              <p className="text-xs text-black">
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-texto' : 'bg-black/20'}`}
          />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
