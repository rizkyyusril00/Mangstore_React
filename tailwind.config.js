/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A2B',
        secondary: '#EFF87A',
        lightGrey: '#EFE6DC',
        blueGrey: '#F8F4F0',
      },
      fontFamily: {
        'poppins': ["Poppins", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

