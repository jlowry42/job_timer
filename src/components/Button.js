import React from 'react'; // eslint-disable-line no-unused-vars
// import styled, { css } from 'styled-components';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// export const Button = styled.button`
//   max-width: 180px;
//   min-width: 100px;
//   padding: ${props => props.padding || '20px'};
//   font-size: 18px;
//   background: ${props => props.bgColor || 'red'};
//   color: white;
//   border-radius: 10px;
//   margin: 0 10px;

//   ${props => props.running
//   && css`
//       background: green;
//     `};

//   &:hover {
//     font-weight: bold;
//     color: blue;
//   }
// `;

const MyButton = props => {
  const { classes } = props;
  console.log(classes);

  //  const btnText = props.running : "stop" ? "start"; // why won't work?
  let btnText;
  let btnClass;
  if (props.running) {
    btnText = 'Stop';
    btnClass = 'running';
  } else {
    btnText = 'Start';
    btnClass = 'stopped';
  }

  return <Button variant="contained" color={props.running ? 'secondary' : 'primary'} onClick={props.toggle} running={props.running}>{btnText}</Button>;
};

// export const ResetButton = props => {
//   return <Button onClick={props.reset} bgColor="#0a0a0a">Reset</Button>;
// };

export default MyButton;
