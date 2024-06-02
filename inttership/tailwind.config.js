/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/.{html,js} "],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        customFont: ['Oswald','sans-serif'],
        // Add more custom font families as needed
      },
    },
  },
  // Other Tailwind configuration settings
};