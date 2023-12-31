/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
 ],
  theme: {
    container:{
      center: true,
      padding: {
        default: '1rem',
        sm: '3rem',
        lg: '4rem',
      },
    },
    extend: {
      colors:{
        primary:{
          100: '#06C2AE',
          200: '#02889B'
        },
        secondary:'#FF693A'
      },
    },
  },
  plugins: [],
}

