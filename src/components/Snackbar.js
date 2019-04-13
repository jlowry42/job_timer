import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';

// const styles = theme => ({
//   snackbar: {
//     backgroundColor
//   }
// })

const Snack = props => {
  const handleClose = (event, reason) => {
    console.log(event, reason);
    props.closeSnackBar();
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={props.snackIsOpen}
      onClose={handleClose}
      autoHideDuration={4000}
    >
      <SnackbarContent
      message={props.message}
        style={{backgroundColor: props.color, color: 'black'}}
    />
      </Snackbar>
  );
};

export default Snack;
