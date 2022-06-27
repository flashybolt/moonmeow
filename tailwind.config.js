/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx'
  ],
  dark: 'class',
  theme: {
    extend: {
      spacing: {
        '184': '46rem',
      }
    },
  },
  plugins: []
}
