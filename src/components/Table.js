import styled from 'styled-components';

const StyledTable = styled.table`
  width: 50%;
  margin: 0 auto;
  background-color: #498e4f;
  color: white;
  min-height: 200px;

  th {
    color: black;
  }

  td {
    border-top: 1px solid black;
    padding: 12px 10px;
    font-size: 16px;
  }
`;

export default StyledTable;