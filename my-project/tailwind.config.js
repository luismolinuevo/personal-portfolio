/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#05aff2",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        background: "var(--background)"
      },
      fontSize: {
        heading: "50px",
        modileHeading: "40px",
      },
    },
  },
  plugins: [],
};
