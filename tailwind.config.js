/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backgroundImage': "url('./src/img/image 1.png')",
        
      },
      fontFamily : {
        'mont' : '"Montserrat", sans-serif'
      }
    },
  },
  plugins: [],
}

