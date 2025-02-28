/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: "#fdf2f2",
          100: "#f9d6d6",
          200: "#f0aeae",
          300: "#e68080",
          400: "#d95959",
          500: "#c13333",
          600: "#a02727",
          700: "#821f1f",
          800: "#671a1a",
          900: "#501919",
          950: "#300c0c",
        },
      },
    },
  },
  plugins: [],
};