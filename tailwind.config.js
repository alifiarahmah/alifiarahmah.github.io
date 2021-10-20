const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        alipblue: "#0B2748",
        alipgold: "#F79720",
        alipwhite: colors.gray[200]
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
        mono: ['JetBrains Mono', 'serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
