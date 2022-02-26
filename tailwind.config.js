module.exports = {
  content: ['./src/**/*.ts', './src/**/*.tsx', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'my-green': '#0A863E',
      },
      rotate: {
        15: '15deg',
        7.5: '7.5deg',
        '-15': '-15deg',
        '-7.5': '-7.5deg',
      },
      transitionDuration: {
        1200: '1200ms',
        1500: '1500ms',
        1700: '1700ms',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
