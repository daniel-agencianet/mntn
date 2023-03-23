/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Gilroy", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#fbd784",
      },
      screens: {
        arcaica: { max: "320px" },
      },
    },
  },
  plugins: [],
};
