/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  dark: "class",
  theme: {
    extend: {
      spacing: {
        168: "42rem",
      },
    },
  },
  plugins: [],
};
