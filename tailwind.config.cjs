const defaultTheme = require('tailwindcss/defaultTheme');
const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    'app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    'src/**/*.{js,ts,jsx,tsx}'
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['roboto', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        'top-xl': '0 -20px 25px -5px rgba(0, 0,  0,  .1)'
      }
    }
  },

  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]']
        },
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]']
        }
      }
    ]
  },
  plugins: [daisyui]
};

module.exports = config;
