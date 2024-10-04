const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        "be-vietnam-pro": "'Be Vietnam Pro'",
      },
      dropShadow: {
        "custom-card": "0 0px 35px rgba(54, 159, 255, 0.4)",
      },
      colors: {
        "title-login": "#0763b0",
        "submit-login": "#3A5B22",
        "bg-sidebar": "#3B5D8F",
        "title-card": "#5e5e5e",
        "btn-card": "#0763b0",
        "title-home": "#0763b0",
        "card-ra": "#DBDBDB",
        "card-task": "#6688cc",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
