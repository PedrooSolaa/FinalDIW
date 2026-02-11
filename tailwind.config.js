/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Colores principales del sistema de diseño
        primary: {
          light: '#6366f1', // Indigo claro
          DEFAULT: '#4f46e5',
          dark: '#4338ca',
        },
        secondary: {
          light: '#ec4899', // Pink claro
          DEFAULT: '#db2777',
          dark: '#be185d',
        },
        accent: {
          light: '#fbbf24', // Amber claro
          DEFAULT: '#f59e0b',
          dark: '#d97706',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      colors: {
        fondo: 'var(--fondo)',
        footer: 'var(--footer)',
        horario: 'var(--horario)',
        secciones: 'var(--secciones)',
        texto: 'var(--texto)',
        'texto-footer': 'var(--texto-horario-footer)',
      },
      fontFamily: {
        sans: ['Architects Daughter', 'cursive', 'system-ui'],
        heading: ['Architects Daughter', 'cursive'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}
