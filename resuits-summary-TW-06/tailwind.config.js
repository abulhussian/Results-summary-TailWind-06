module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        lightblue:'#ECF2FF',
        white:'#FFFFFF',
        grey:'#CAC9FF',
        darkNavy:'#303B59',
        red:'#FF5555',
        yellow:'#FFB21E',
        green:'#00BB8F',
        blue:'#1125D6',
      },
    backgroundImage:{
        mixblue:'linear-gradient(rgb(119,85,255),rgb(105,67,255),rgb(47,44,233))',
        circleblue:'linear-gradient(rgba(78,33,201,0.855),rgba(36,33,201,0.268),rgba(36,33,201,0.011))'
        },
    },
  },
  plugins: [],
}
