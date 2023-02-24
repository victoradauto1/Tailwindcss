/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        gray:{
          1000: "#999"
        }
      },
      spacing:{
        50:"20rem"
      }
    },
  },
  plugins: [],
}