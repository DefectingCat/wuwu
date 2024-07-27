const { addDynamicIconSelectors } = require('@iconify/tailwind');
const colors = require('tailwindcss/colors');

/* https://colorhunt.co/palette/27374d526d829db2bfdde6ed */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      wuwu: {
        100: '#DDE6ED',
        200: '#9DB2BF',
        300: '#526D82',
        400: '#27374D',
      },
      ...colors,
    },
    extend: {},
  },
  plugins: [addDynamicIconSelectors()],
};
