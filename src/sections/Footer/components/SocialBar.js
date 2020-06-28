import React from 'react';
import styled from 'styled-components';
import facebookImg from './facebook.svg';
import emailImg from './email.svg';
import mediumImg from './medium.svg';

const SocialBar = () => {
  console.log(emailImg);
  return (
    <Container>
      <Icon src={facebookImg} />
      <Icon src={emailImg} />
      <Icon src={mediumImg} />
    </Container>
  );
};

export default SocialBar;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin: 5px;
`;
