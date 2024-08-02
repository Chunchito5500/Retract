/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Trebuchet MS", "Arial", "sans-serif"],
        serif: ["Verdana", "Times New Roman", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        convergence: ["Convergence", "sans-serif"]
      },
      fontWeight: {
        'medium': 500,
      },
      colors: {
        customGray: '#444146',
        customGrayHover: '#302e32',
      },
    },
  },
  plugins: [
    require("daisyui"),
    "@tailwindcss/aspect-ratio",
    require('preline/plugin'),
  ],
};
