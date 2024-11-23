/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Poppins", "sans-serif"] },
      gridTemplateColumns: { "70/30": "70% 28%" },
    },
  },
  variants: { extend: {} },
  plugins: [],
};