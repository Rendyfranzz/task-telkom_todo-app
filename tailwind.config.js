/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dark': '#292929',
        'light': '#eeeeec',
        'cdark': '#595e64',
      },fontFamily: {
        'popins': ['sans-serif', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

