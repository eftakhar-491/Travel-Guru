/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        zoom: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        zoom: "zoom 1s ease-in",
      },
      // keyframes: {
      //   zoomOut: {
      //     "0%": { transform: "scale(1)" },
      //     "100%": { transform: "scale(0)" },
      //   },
      // },
      // animation: {
      //   zoomOut: "zoomOut 1s ease-in",
      // },
    },
  },
  plugins: [],
};
