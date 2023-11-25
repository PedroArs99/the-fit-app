/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  daisyui: {
    themes: ["sunset", "winter"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

