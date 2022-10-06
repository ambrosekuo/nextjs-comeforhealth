/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-220px * 17))" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
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
