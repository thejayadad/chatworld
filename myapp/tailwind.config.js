/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
import { withUt } from "uploadthing/tw";

module.exports = withUt({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
        colors: {
          primary: '',
          secondary: '',
          grey: '#404041'
        }
    },
  },
  darkMode: "class",
  plugins: [nextui()],

});