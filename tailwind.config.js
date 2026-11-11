/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind scans these files and only keeps the classes we actually use
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Our own color palette for the bookstore
      colors: {
        paper: "#f7f1e6", // page background (warm paper)
        ink: "#1f2a44", // main text / dark navy
        clay: "#c2562f", // accent color for buttons and links
        sand: "#e8dcc4", // borders and soft backgrounds
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "serif"],
        sans: ["Inter", "system-ui", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
