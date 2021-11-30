module.exports = {
  mode: 'jit',
  purge: {
    content: ['./index.html', './public/**/*.html', './public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  },
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
