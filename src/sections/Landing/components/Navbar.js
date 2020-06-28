import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Container>
      <NavLink>about</NavLink>
      <NavLink>tracks</NavLink>
      <NavLink>speakers</NavLink>
      <NavLink>schedule</NavLink>
      <NavLink>faq</NavLink>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 650px) {
    display: none;
  }
  /* padding: 20px 0px; */
`;

const NavLink = styled.a`
  color: #f8f0e7;
  margin: 0px 20px;
  font-size: 28px;
  text-decoration: none;
  font-weight: 200;
  cursor: pointer;
`;
