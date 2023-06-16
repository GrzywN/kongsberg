const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      primary: colors.blue,
      neutral: colors.gray,
      success: colors.green,
      warning: colors.orange,
      danger: colors.red,
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
