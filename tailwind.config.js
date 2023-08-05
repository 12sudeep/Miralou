/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter"],
      serif: ["Jomolhari"],
    },
    extend: {
      colors: {
        primary: "#504D67",
      },
    },
  },
  plugins: [],
};
