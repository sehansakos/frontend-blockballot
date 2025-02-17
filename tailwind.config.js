/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        'custom': '30px', // Adds m-custom
        '70rem': '70rem',   // Adds m-2rem
        '35.3rem':'35.3rem',
        '40rem':'40rem',
        '45rem':'45rem',
        '31.5rem':'31.5rem',
        '-0.3rem':'-0.3rem'
      },

      width:{
        '50rem':'50rem',
      },
      colors:{
        'customeBlue':'#2E4758',
        'customBlue': '#2F4F6F', // Replace with your desired blue color code
        'bgColor': "#D9D9D9",  // Light Gray
        'registerElectForm':"#E3EAF6",
        'registerForm':"#FFFFFF", //Voter and candidate registration form

      },
      fontFamily:{
        "montserrat": ["Montserrat", "serif"]
      },
      screens:{
        sm:"500px",
      }
    },
  },
  plugins: [],
}

