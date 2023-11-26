/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  daisyui: {
    themes: ["sunset", "bumblebee"],
  },
  theme: {
    extend: {
      spacing: {
        '112': '27rem'
      }
    },
  },
  plugins: [require("daisyui")],
};

