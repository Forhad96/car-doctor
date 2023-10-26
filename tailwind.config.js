/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      group: "group",
      colors: {
        primary: "#FF3811",
      },
    },
  },
  plugins: [require("daisyui")],
};
