/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        sm: '0rem',
        lg: '0rem',
        xl: '2rem',
        '2xl': '9.5rem',
      },
    },
    extend: {
      colors:{
        brand: '#4c3398',
        brandHover: '#5d3ebc',
        brandText: '#dbdbff'
      }
    },
  },
  plugins: [],
}