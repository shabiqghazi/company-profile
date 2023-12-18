/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./artikel.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0E8388",
        light: "#CBE4DE",
        dark: "#2E4F4F",
        darker: "#2C3333",
      },
    },
  },
  plugins: [],
};
