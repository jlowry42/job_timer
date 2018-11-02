import React from 'react'; // eslint-disable-line no-unused-vars
import styled, { css } from 'styled-components';

const Button = styled.button`
  max-width: 180px;
  min-width: 100px;
  padding: 20px;
  font-size: 18px;
  background: ${props => props.bgColor || 'red'};
  color: white;
  border-radius: 10px;
  margin: 0 10px;

  ${props => props.running
  && css`
      background: green;
    `};
  
  &:hover {
    font-weight: bold;
    color: blue;
  }
`;

export const MyButton = props => {
  //  const btnText = props.running : "stop" ? "start"; // why won't work?
  let btnText;
  if (props.running) {
    btnText = 'Stop';
  } else {
    btnText = 'Start';
  }

  return <Button onClick={props.toggle} running={props.running}>{btnText}</Button>;
};

export const ResetButton = props => {
  return <Button onClick={props.reset} bgColor="#0a0a0a">Reset</Button>;
};
