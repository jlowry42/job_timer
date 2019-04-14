import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
  width: 50%;
  height: 50%;
  z-index: 1;
  border: 1px solid blue;
  border-radius: 5px;
  margin: 0 auto;
`;

const EditForm = props => {
  return <input type="text" placeholder={props.name} />;
};

export default StyledForm;
