/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}","./src/**/**/*.{html,js,jsx}","./*.html"],
  theme: {
    extend: {
      colors:{
        blue2:"#0091c9"
      }
    },
  },
  plugins: [],
}

