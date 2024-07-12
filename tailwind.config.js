/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': "#14b8a6",
        'secondary': {
          100: '#f4f4f5',
          200: '#e4e4e7',
        },
      },
    },
  },
  plugins: [],
}

