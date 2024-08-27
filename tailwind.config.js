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
        "gray2": "#6F7177",
        "gray3": "#E2E4E7",
        "gray3": "#EFF1F3",
        "green1": "#67BF6B",
        "blue1": "#4B40EE"
      }
    },
  },
  plugins: [],
}

