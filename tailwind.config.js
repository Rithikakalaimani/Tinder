/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./ind.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.jsx",
    "./components/**/*.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

