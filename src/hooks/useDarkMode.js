import { useState, useEffect } from 'react';

export function useDarkMode() {
  // Estado inicial desde localStorage o "system"
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'system';
    return localStorage.getItem('theme') || 'system';
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Aplicar el tema según la selección
    const applyTheme = () => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else if (theme === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.toggle('dark', mediaQuery.matches);
      }
      localStorage.setItem('theme', theme);
    };

    applyTheme();

    // Detectar cambios en el sistema solo si está en "system"
    const handleSystemChange = (e) => {
      if (theme === 'system') {
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);

    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [theme]);

  // Cambia entre "light" → "dark" → "system"
  const toggleTheme = () => {
    setTheme((prev) =>
      prev === 'light' ? 'dark' : prev === 'dark' ? 'system' : 'light'
    );
  };

  return { theme, toggleTheme };
}
