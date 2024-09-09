/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "primary": ['Montserrat'],
      },
      colors:{
        "primary":"#F8F6E4",
        "secondary": "#399866",
      },
      screens: {
        'tab': '768px',
        'medium':'1120px',
        'testMap':'1380px' ,// Custom media query for 400px screens
      },
      
    },
  },
  plugins: [],
}

