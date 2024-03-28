/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'sans-serif'],
      logo: ['Black Han Sans', 'sans-serif'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        reddish: '#ec3648',
      },
      fontSize: {
        '10xl': '10rem',
      },
    },
  },
  plugins: [],
}
