import React from 'react';
import styled, { css } from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  clock: {
    backgroundColor: 'lightgray',
    fontSize: 40,
    border: '2px solid red',
    borderRadius: 50,
    padding: 30,
    margin: '10px auto',
  },
  running: {
    border: '2px solid green',
  },
});

const Clock = props => {
  const { classes, time } = props;
  return (
    <Grid className={props.running ? `${classes.clock} ${classes.running}` : `${classes.clock}`} item xs={4}>
    <Typography variant="h4">{time}</Typography>
  </Grid>

  );
};

// const Clock = styled.h3`
//   background-color: lightgray;
//   font-size: 20px;
//   border: 2px solid red;
//   border-radius: 5px;
//   padding: 10px;
//   width: 20%;
//   margin: 10px auto;
//   color: #020202;

//   ${props => props.running
//   && css`
//       border: 2px solid green;
//     `};
// `;

export default withStyles(styles)(Clock);
