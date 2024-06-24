/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        "primary-green": "hsl(75, 94%, 57%)",
        custom: {
          white: "hsl(0, 0%, 100%)",
          grey: "hsl(0, 0%, 20%)",
          "dark-grey": "hsl(0, 0%, 12%)",
          "off-black": "hsl(0, 0%, 8%)",
        },
      },
      fontSize: {
        14: "14px",
      },
    },
  },
  plugins: [],
};
