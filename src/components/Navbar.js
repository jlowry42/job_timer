/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MyNav = styled.div`
  background-color: gray;
  display: flex;
  justify-content: space-around;
`;

const Navbar = () => {
  return (
    <MyNav>
      <Link to='/'>Home</Link>
      <Link to='/history'>History</Link>
    </MyNav>
  );
};

export default Navbar;
