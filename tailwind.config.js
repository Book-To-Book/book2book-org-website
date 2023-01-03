/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: {
      black: "#34312d",
      white: "#ffffff",
      transparent: "#ffffffaa",
      pink: '#ff1276',
      salmon: '#ffaf9b',
      orange: '#ff752d',
    },
    fontSize: {
      xs: ['.9rem', '1.2rem'],
      sm: ['1.1rem', '1.5rem'],
      md: ['1.2rem', '1.9rem'],
      base: ['1.4rem', '2.2rem'],
      lg: ['2rem', '2.8rem'],
      xl: ['2.8rem', '4.3rem'],
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    screens: {
      'sm': '740px',
      'md': '960px',
    }
  },
  variants: {
    extend: {
      lineHeight: {
        '1': '1.5rem',
      }
    },
  },
  plugins: [],
}
