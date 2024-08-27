/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        circularStd: ["CircularStd", "sans-serif"],
      },
      colors:{
        "black1": "#1A243A",
        "gray1": "#BDBEBF",
        "green1": "#67BF6B"
      }
    },
  },
  plugins: [],
}

