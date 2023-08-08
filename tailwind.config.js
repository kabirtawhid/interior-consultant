/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat"],
      "crimson-pro": ["Crimson Pro"],
      lora: ["Lora"],
    },
    extend: {
      screens: {
        "2lg": "1100px",
        tall: { raw: "(min-height: 700px)" },
      },
    },
  },
  plugins: [],
};
