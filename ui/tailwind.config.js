/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a900ff",

          secondary: "#ff2b00",

          accent: "#0074bf",

          neutral: "#150702",

          "base-100": "#fbfbff",

          info: "#00e8ff",

          success: "#00c68e",

          warning: "#ecc200",

          error: "#dd0045",
        },
      },
      "cupcake",
      "sunset",
      "bumblebee",
    ],
  },
  theme: {
    extend: {
      spacing: {
        112: "27rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
