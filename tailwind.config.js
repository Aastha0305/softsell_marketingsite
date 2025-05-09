/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#dcf2ff',
          200: '#b2e5ff',
          300: '#6cd3ff',
          400: '#2cbdff',
          500: '#00a3ff',
          600: '#0080db',
          700: '#0064b1',
          800: '#005592',
          900: '#0a4777',
          950: '#062c4e',
        },
        secondary: {
          50: '#f6f7f9',
          100: '#ebedf3',
          200: '#d5dbe6',
          300: '#afbcd0',
          400: '#8295b7',
          500: '#61769f',
          600: '#4b5f85',
          700: '#3d4c6c',
          800: '#33405a',
          900: '#2c374c',
          950: '#1d2335',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
}