import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import yellow from '@material-ui/core/colors/yellow';
import orange from '@material-ui/core/colors/orange';


export default createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange,

  },
  overrides: { // not sure how to do overrides
    /*
    MuiButton: {
      backgroundColor: 'black',
    },
    */
  },
});
