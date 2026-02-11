import React from 'react';

const Heading = ({ 
  level = 1, 
  children, 
  className = '', 
  gradient = false,
  ...props 
}) => {
  const Tag = `h${level}`;
  
  const styles = {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold font-heading',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-bold font-heading',
    h3: 'text-2xl md:text-3xl lg:text-4xl font-semibold font-heading',
    h4: 'text-xl md:text-2xl font-semibold font-heading',
    h5: 'text-lg md:text-xl font-semibold font-heading',
    h6: 'text-base md:text-lg font-semibold font-heading',
  };

  const gradientClass = gradient 
    ? 'bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent' 
    : 'text-neutral-900 dark:text-neutral-50';

  return (
    <Tag
      className={`${styles[Tag]} ${gradientClass} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Heading;
