/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        borderTrail: {
          "0%": { transform: "translateX(0) translateY(0)" },
          "25%": { transform: "translateX(100%) translateY(0)" },
          "50%": { transform: "translateX(100%) translateY(100%)" },
          "75%": { transform: "translateX(0) translateY(100%)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
      },
      animation: {
        borderTrail: "borderTrail 3s linear infinite",
      },
    },
  },
  plugins: [],
};
