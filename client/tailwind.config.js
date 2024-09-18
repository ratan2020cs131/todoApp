/** @type {import('tailwindcss').Config} */

export const colors = {
  primary: {
    white: "#F8F8FF",
    black: "#202020",
    gray: "#DCDCDC",
    success: "#32CD32",
  },
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors,
    extend: {},
  },
  plugins: [],
};
