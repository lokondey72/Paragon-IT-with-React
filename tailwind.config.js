/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "primary": "#FE0000",
        "secandery": "#0D79FE"
      },
    },
  },
  plugins: [],
};
