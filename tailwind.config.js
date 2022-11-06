/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "test.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
      },
      colors: {
        bgwhite: "#faf7f5",
        primary: "#65c3c8",
        secondary: "#ef9fbc",
        accent: "#eeaf3a",
        neutral: "#291334",
        base: "#faf7f5",
        basecontent: "#291334",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [require("daisyui")],
};
