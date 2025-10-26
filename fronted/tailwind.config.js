/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  darkMode: "class", // ✅ enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        futuristic: "#0f0f1a",
        neon: "#00ffff",
      },
    },
  },
  plugins: [tailwindScrollbar],
};
