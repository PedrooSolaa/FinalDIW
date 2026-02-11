import React from 'react';

const Card = ({ 
  icon, 
  title, 
  description, 
  variant = 'default',
  className = '',
  ...props 
}) => {
  const variants = {
    default: 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700',
    gradient: 'bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 border border-transparent',
    hover: 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-primary dark:hover:border-primary-light hover:shadow-xl',
  };

  return (
    <div
      className={`rounded-xl p-6 md:p-8 transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && (
        <div className="mb-4 text-4xl">
          {icon}
        </div>
      )}
      
      {title && (
        <h3 className="text-xl md:text-2xl font-bold font-heading text-neutral-900 dark:text-neutral-50 mb-3">
          {title}
        </h3>
      )}
      
      {description && (
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default Card;
