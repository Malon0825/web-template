/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        navbar: "#0A0A0A",
        fontColor: "#00CCCB",
        primary: "#121212",
        input_field: "#F3F7FB",
        button: "#162D3A",
        instaBorder: "#a9267b",
        instaStroke: "#fed778",
        twitter: "#1b96e2",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1200px",
      lg: "1400px",
      xl: "1600px",
    },
  },
  plugins: [],
};