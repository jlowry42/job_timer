import React from "react";
import styled, { css } from "styled-components";

const Clock = styled.h3`
  background-color: lightgray;
  font-size: 20px;
  border: 2px solid red;
  border-radius: 5px;
  padding: 10px;
  width: 50%;
  margin: 10px auto;

${props =>
  props.running &&
  css`
  border: 2px solid green;
`}
`;

export default Clock;
