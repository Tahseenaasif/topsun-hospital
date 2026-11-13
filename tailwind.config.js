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
          DEFAULT: '#342078',
          dark: '#241655',
          light: '#482da5',
          soft: '#ede8f8',
          50: '#f5f3fa',
          100: '#ece7f7',
          200: '#dcd3f0',
          500: '#342078',
          600: '#2b1b63',
          700: '#241655',
          900: '#150c33',
        },
        secondary: {
          DEFAULT: '#008B55',
          dark: '#006d43',
          light: '#00ab69',
          soft: '#e6f7ef',
          50: '#f0fbf5',
          100: '#def5e9',
          500: '#008B55',
          600: '#007548',
          700: '#005f3a',
        },
        accent: {
          DEFAULT: '#D9382B',
          dark: '#b62a1f',
          light: '#e3584d',
          soft: '#fdf1f0',
          50: '#fef5f4',
          100: '#fde7e5',
          500: '#D9382B',
        },
        brandText: {
          DEFAULT: '#1C2434',
          muted: '#5A6A80',
          subtle: '#8898AA',
        },
        brandBgLight: '#F4F7FB',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        hindi: ['Noto Sans Devanagari', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(52, 32, 120, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'premium': '0 20px 40px -15px rgba(52, 32, 120, 0.12), 0 0 1px 1px rgba(52, 32, 120, 0.04)',
        'floating': '0 25px 50px -12px rgba(52, 32, 120, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}

