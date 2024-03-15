/** @type {import('tailwindcss').Config} */

const baseTheme = {
  primary: "#000000",
  secondary: "#999999",
  accent: "#777777",
  neutral: "#555555",
  "base-100": "#FFFFFF",
  "base-200": "#DDDDDD",
  "base-300": "#BBBBBB",
  info: "#0074bf",
  success: "#00c68e",
  warning: "#ecc200",
  error: "#dd0045",
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
        112: "27rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
