/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "test.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
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
