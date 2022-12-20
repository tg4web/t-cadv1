/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#061826",
        secondary: "#89AAE6",
        textField: "#D9D9D9",
        cardBackground: "#CCCCCC",
        selected: "#C7C7C7",
        border: "#A4A4A4",
      },
    },
  },
  plugins: [],
};
