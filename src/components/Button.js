import React from 'react'; // eslint-disable-line no-unused-vars
import Button from '@material-ui/core/Button';

const MyButton = props => {
  const btnText = props.running ? 'Stop' : 'Start'; // why won't work?
  return (
    <Button
      variant="contained"
      color={props.running ? 'secondary' : 'primary'}
      onClick={props.toggle}
      running={props.running}
    >
      {btnText}
    </Button>
  );
};

export default MyButton;
