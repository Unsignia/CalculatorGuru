module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: { main: "#262262" } },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
