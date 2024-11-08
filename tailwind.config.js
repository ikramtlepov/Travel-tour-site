/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backgroundImage': "url('./src/img/bg.png')",
        
      },
      fontFamily : {
        'mont' : '"Montserrat", sans-serif'
      }
    },
  },
  plugins: [],
}

