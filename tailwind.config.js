/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      paddding: "16px",
    },
    extend: {
      colors: {
        primary: "#f59e0b",
        dark: "#020617",
      },
      screen: {
        "2xl": "132px",
      },
    },
  },
  plugins: [],
};
