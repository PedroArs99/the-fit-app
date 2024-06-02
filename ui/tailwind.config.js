/** @type {import('tailwindcss').Config} */

const primary = "#FD7014"
const secondary = "#222831"

const baseTheme = {
  primary,
  "primary-content": secondary,

  secondary,
  accent: "#393E46",
  neutral: "#393E46",

  "base-100": "#FFFFFF",
  "base-200": "#DDDDDD",
  "base-300": "#BBBBBB",

  info: "#0074bf",
  success: "#00c68e",
  warning: "#ecc200",
  error: "#dd0045",

  "--padding-card": "0.75rem",
};

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  daisyui: {
    themes: [
      {
        light: {
          ...baseTheme,
        },
      },
    ],
  },
  theme: {
    extend: {
      spacing: {
        92: "23rem",
        94: "23.5rem",
        112: "27rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
