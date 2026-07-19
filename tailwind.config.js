/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: '#ff2d78',
        'pink-dim': '#c4195a',
        bg: '#080808',
        bg2: '#0f0f0f',
        cream: '#f0ece8',
        muted: '#444444',
        border: '#1c1c1c',
        chrome: '#aaaaaa',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
