const { addDynamicIconSelectors } = require('@iconify/tailwind');

/* https://colorhunt.co/palette/27374d526d829db2bfdde6ed */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [addDynamicIconSelectors()],
};
