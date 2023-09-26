import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// Create a theme instance.
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: `linear-gradient(to right, #000428, #004e92)` /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        },
      },
    },
    MuiCard:{
      styleOverrides: {
       root:{
        background: `rgba(230,238,255,0.50)`,
        backdropFilter:`blur(20px)`
       }
      },

    }
  },
  palette: {
    // background: {
    //   default: "#132B4D"

    //   // background-image: linear-gradient( 0.3deg,  rgba(6,17,33,1) 1.1%, rgba(42,98,226,1) 97.3% );
    // },
    // backgroundImage:{
    //   default: 'linear-gradient( 0.3deg,  rgba(6,17,33,1) 1.1%, rgba(42,98,226,1) 97.3% )'
    // },
    primary: {
      main: '#132B4D'
    },
    secondary: {
      main: '#019587',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#CCEA8D',
    },
    success: {
      main: '#A6BC09',
    },
    error: {
      main: red.A400,
    },
  },
});
export default theme;