import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  width: 30%;
  padding: 20px;
  font-size: 18px;
  background: red;
  color: white;
border-radius: 30%;

${props =>
  props.running &&
  css`
background: green;
`}
`;

export const MyButton = props => {
  //  const btnText = props.running : "stop" ? "start"; // why won't work?
  let btnText;
  if (props.running) {
    btnText = "stop";
  } else {
    btnText = "start";
  }

  return <Button onClick={props.toggle}>{btnText}</Button>;
};
