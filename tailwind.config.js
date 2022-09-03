/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-1000px * 7))" },
        },
      },
      animation: {
        scroll: "scroll 5s linear infinite",
      },
      colors: {
        green: {
          500: "#89c341",
          600: "#99c341",
          800: "#008000",
          900: "#009047",
        },
      },
    },
  },
  plugins: [],
};
