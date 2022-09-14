const daisyui = require('daisyui');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  daisyui: {
    themes: [
      {
        dark: {
          primary: '#13dbde',
          secondary: '#026773',
          accent: '#F2E3D5',
          neutral: '#024959',
          'base-100': '#0a1930',
          info: '#35B0F3',
          success: '#1B743C',
          warning: '#F38A12',
          error: '#F2215C',
        },
      },
    ],
  },
  plugins: [daisyui],
};

module.exports = config;
