module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        exo2: ['Exo\\ 2', 'sans-serif']
      },
      colors: {
        phoenixRed: '#f83600',
        phoenixYellow: '#f9d423',
        jaguarYellow: '#f9f047',
        jaguarGreen: '#0fd850',
        seaGreen: '#2af598',
        seaBlue: '#009efd',
        metalBrown: '#d7d2cc',
        metalGray: '#304352',
        carbon: '#434343',
        glass: '#dfe9f3'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
