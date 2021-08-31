module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        exo2: ['Exo\\ 2', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
