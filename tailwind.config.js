/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ringa: {
          red: "#E61014",
          redDeep: "#9F110A",
          redSoft: "#F24245",
          charcoal: "#261714",
          chrome: "#F0F0ED",
          steel: "#A3A1A0",
          gunmetal: "#5C5B59",
          ember: "#E1C52D",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.10)",
        lift: "0 14px 40px rgba(2, 6, 23, 0.14)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
}
