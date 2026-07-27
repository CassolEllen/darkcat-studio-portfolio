/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0908",
        marker: "#c81324",
        markerdeep: "#7a0d17",
        chalk: "#efe9df",
        concrete: "#2b2926",
        skin: "#c99a72",
        rust: "#8a3324",
      },
      fontFamily: {
        display: ["Anton", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        hand: ["'Permanent Marker'", "cursive"],
      },
    },
  },
  plugins: [],
};
