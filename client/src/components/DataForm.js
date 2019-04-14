import React from "react";
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 13px 10px;
  margin-right: 5px;
  border-radius: 5px;
  border: 1px solid gray;
  `;

const FormButton = styled.button`
  padding: 10.6px;
  border-radius: 5px;
  color: #040404;
  font-size: 16px;
  background-color: #eabf2b;

  &:hover {
    filter: invert(100%) opacity(0.9);

  }
  `;



const DataForm = props => {
  return (
    <form onSubmit={props.completeJob}>
    <StyledInput
      type="text"
      name="amount"
      placeholder="enter pay"
      value={props.amount}
      onChange={props.onChange}
    />

    <StyledInput  
      type="text"
      name="jobName"
      placeholder="job title"
      value={props.jobName}
      onChange={props.onChange}
    />
    <FormButton type="submit" onSubmit={props.completeJob}>Finish Job</FormButton>
    </form>
  );
};

export default DataForm;
