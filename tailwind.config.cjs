/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "light-100": "#FFF0EC",
        "bodyBg": "#F2F2F2",
      },
      fontFamily: {
        "bungee": "Bungee Shade"
      }
    },
  },
  plugins: [],
}
