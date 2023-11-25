/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  daisyui: {
    themes: ["sunset", "bumblebee"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

