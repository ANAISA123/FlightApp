/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
 ],
  theme: {
    container:{
      center: true,
      padding: {
<<<<<<< HEAD
        DEFAULT: '1rem',
=======
        default: '1rem',
>>>>>>> origin/develop
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
<<<<<<< HEAD
      },
    },
  },

=======
      },
    },
  },
>>>>>>> origin/develop
  plugins: [],
}

