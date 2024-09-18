/** @type {import('tailwindcss').Config} */

export const colors = {
  primary: {
    white: "#F8F8FF",
    black: "#202020",
    gray: "#DCDCDC",
    dark: "#2F4F4F",
    success: "#32CD32",
    blue: "#00BFFF",
    navy: "#1E90FF",
  },
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors,
    extend: {
      animation: {
        loading: "spin 2s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
