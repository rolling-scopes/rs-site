const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        accent: {
          1: '#FAFAFA',
          2: '#EAEAEA',
          7: '#333'
        },
        night: {
          100: '#F2F3F7',
          200: '#EAEDF5',
          300: '#C0C3CE',
          500: '#9FA1AE',
          700: '#6C7283',
          900: '#191B1D'
        },
        rsbrand: '#FFDB20',
        modal: '#2c2f3c',
        success: '#0070f3',
        cyan: '#79FFE1',
        snow: '#FEFEFE'
      },
      spacing: {
        18: '4.5rem',
        28: '7rem'
      },
      letterSpacing: {
        tighter: '-.04em'
      },
      lineHeight: {
        tight: 1.2
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem'
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)'
      },
      maxWidth: {
        '1/2': '50%'
      }
    }
  },
  plugins: []
};
