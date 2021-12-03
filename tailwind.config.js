module.exports = {
  mode: 'jit',
  purge: ['./index.html', './public/**/*.html', './public/index.html', './src/**/*.{js,jsx,ts,tsx}'],

  darkMode: false,

  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      pink: {
        light: '#EC489F',
        dark: '#DB2777',
      },

      green: {
        light: '#A8E0A5',
        dark: '#5D9C5D',
      },

      red: {
        light: '#F9A8A8',
        dark: '#D92727',
      },

      white: {
        light: '#F8FAFC',
        dark: '#F4F4F5',
      },

      black: {
        light: '#36454F',
        dark: '#000',
      },
    },

    extend: {
      container: {
        center: true,
      },
    },
  },

  plugins: [],
};
