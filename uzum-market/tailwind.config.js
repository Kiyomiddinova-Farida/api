/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        uzum: {
          primary: '#7000FF',
          secondary: '#FFD600',
          gray: '#f5f5f5',
          dark: '#111111',
        },
      },
    },
  },
  plugins: [],
}