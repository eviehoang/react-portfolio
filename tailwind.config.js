/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      colors: {
        blue: "#8ecae6",
        teal: "#219ebc",
        darkblue: "#023047",
        yellow: "#ffb703",
        lavender: "#CAC6E0",
        pink: "#e9a9cc",
        white: "#ffffff",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "3.5rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("flowbite-typography")],
};
