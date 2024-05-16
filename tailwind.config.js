/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'mono': ["IBM Plex Mono", "monospace"],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {
      colors: {
        primary: "#FE0000",
        secandery: "#0D79FE",
        brand: "#E5E5E5"
      },
      backgroundImage: {
        BannerImg: "url('/public/Banner-bg-img.jpg')",
      },
    },
  },
  plugins: [],
};
