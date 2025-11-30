/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF4D67",
        secondary: "#2E2E2E",
        accent: "#FFFFFF",
        whatsapp: "#25D366"
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.6rem"
      }
    },
  },
  plugins: [],
};
