/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'primary': ['Raleway', 'sans-serif'],
        
      },
      container: {
        padding: {
          DEFAULT: '20px',
          lg: '0',
        },
      },
      
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1300px',
      },

      colors: {
        primary: '#c71212',
        secondary: '#fa9397',
        dark: '#333333'
      },
      fontSize: {
        '2xs': '.680rem', // Your custom font size
        '3xs': '.550rem',
      },
    },
  },
  plugins: [],
}