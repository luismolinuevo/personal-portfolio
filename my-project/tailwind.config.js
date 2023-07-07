/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "tit": ["Titillium Web", "sans-serif"],
      },
      colors: {
        main: '#05aff2'
      },
      fontSize: {
        heading: "50px",
        modileHeading: "40px"
      }
    },
  },
  plugins: [],
}