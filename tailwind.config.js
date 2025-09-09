/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
        'light-bg': '#F9FAFB',
        'dark-bg': '#111827',
        'light-text': '#1F2937',
        'dark-text': '#F9FAFB',
      },
    },
  },
  plugins: [],
}