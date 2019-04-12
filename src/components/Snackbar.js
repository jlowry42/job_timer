import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const Snack = props => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      message={'snackbar test'}
    />
  );
};

export default Snack;
