/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#212529',
        secondary: '#6c757d',
        accent: '#f59e0b',
        light: '#f8f9fa',
        dark: '#212529',
        gray: '#6c757d',
        'light-gray': '#e9ecef',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
