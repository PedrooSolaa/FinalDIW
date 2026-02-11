import React from 'react';

const Section = ({ 
  children, 
  className = '', 
  fullWidth = false,
  background = 'default',
  padding = 'default',
  ...props 
}) => {
  const backgrounds = {
    default: '',
    gray: '',
    primary: '',
    gradient: '',
  };

  const backgroundStyle = background === 'gray' ? { backgroundColor: 'var(--secciones)' } : {};

  const paddings = {
    none: '',
    sm: 'py-8 md:py-12',
    default: 'py-12 md:py-16 lg:py-20',
    lg: 'py-16 md:py-20 lg:py-28',
  };

  return (
    <section
      style={backgroundStyle}
      className={`${backgrounds[background]} ${paddings[padding]} ${className}`}
      {...props}
    >
      <div className={fullWidth ? 'w-full' : 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'}>
        {children}
      </div>
    </section>
  );
};

export default Section;
