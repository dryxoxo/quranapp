/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0F172A',
      },
      maxWidth: {
        '8xl': '96rem',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}