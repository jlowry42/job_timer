import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';


export default createMuiTheme({
  palette: {
    primary: {main: green[500]},
    secondary: red,

  },
  overrides: { // not sure how to do overrides
    /*
    MuiButton: {
      backgroundColor: 'black',
    },
    */
  },
});
