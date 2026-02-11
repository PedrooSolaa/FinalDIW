import React from 'react';
import logo from '../../img/Logo.jpeg';
import logo2 from '../../img/Logo (2).jpeg';
import logo3 from '../../img/Logo3.jpeg';
import logo4 from '../../img/Logo4.jpeg';
import logo5 from '../../img/Logo5.jpeg';

const Servicios = () => {
  const servicios = [
    { img: logo, text: 'Diseño Grafico' },
    { img: logo2, text: 'Desarrollo Web' },
    { img: logo3, text: 'SEO' },
    { img: logo4, text: 'Marketing Online' },
    { img: logo5, text: 'Fotografia/Video' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
      {servicios.map((item, index) => (
        <div key={index} className="bg-white dark:bg-neutral-800 rounded-lg p-6 flex flex-col items-center text-center">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white border-2 flex items-center justify-center mb-4" style={{ borderColor: 'var(--secciones)' }}>
            <img src={item.img} alt="Logo de servicio" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Servicios;
