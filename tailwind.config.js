/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      fontFamily: {
        'sora': ['"Sora"', "sans-serif"],
      },

      colors: {
        'veryYellow': '#F5C044',
        'veryGreen': '#4CA154',
        'veryDark': '#18181B',
        'veryGray': '#52525A',
        'veryGrayDesatured': '#D4D4D8',
        'lightWhite': '#FAFAF9',
        'veryWhite': '#FFFFFF',
        'color1': "#0f0c29",
        'color2': "#302b63",
        'color3': "#24243e",
      }

    },
  },
  plugins: [],
}

