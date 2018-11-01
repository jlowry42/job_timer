/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MyNav = styled.div`
  background-color: #394b83;
  text-decoration: none;
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 10px auto;
  border-radius: 8px;

  a {
    text-decoration: none;
    padding: 10px 100px;
    font-weight: bold;
    color: #65c343;
    font-size: 26px;
  }
`;

const Navbar = () => {
  return (
    <MyNav>
      <Link to='/'>Current Job</Link>
      <Link to='/history'>Completed Jobs</Link>
    </MyNav>
  );
};

export default Navbar;
