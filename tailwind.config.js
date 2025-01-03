/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#202020",
        outline: "#373737",
        text: "#BABABA",
        add: "#626ED9",
        edit: "#ECBB5B",
        delete: "#C64444",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
    plugins: [],
  }
}