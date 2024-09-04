const { colors } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // Alteração de COLORS
    // colors: {
    //   black: '#010101'
    // },
    // Inclusao de BREAKPOINT e MAX-WIDTH personalizado
    // screens: {
    // 'tablet': '640px',
    // 'cel': {'max': '400px'}
    // },
    extend: {
      colors: {
        "new-blue": "#243C5A",
        gray: {
          ...colors.gray,
          900: "#999",
        },
      }
      // Inclusão de novo SPACING
      // spacing: {
      //   '50': '20rem'
      // }
    },
  },
  plugins: [],
};
