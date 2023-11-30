/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  themes: ["light", "dark"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      borderRadius: {
        "5xl": "40px",
      },
      colors: {
        violate: "#7A6AD8",
      },
    },
  },
  plugins: [require("daisyui")],
};
