/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'Manrope', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 12px 40px -12px rgba(14, 165, 233, 0.32)',
      },
    },
  },
  plugins: [],
}
