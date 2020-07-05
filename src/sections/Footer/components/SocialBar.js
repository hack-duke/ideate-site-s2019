import React from 'react';
import styled from 'styled-components';
import facebookImg from './facebook.svg';
import emailImg from './email.svg';
import mediumImg from './medium.svg';

const SocialBar = () => {
  console.log(emailImg);
  return (
    <Container>
      <a
        href="https://www.facebook.com/hackduke"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon src={facebookImg} />
      </a>
      <a
        href="mailto:hackers@hackduke.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon src={emailImg} />
      </a>
      <a
        href="https://medium.com/@hackduke"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon src={mediumImg} />
      </a>
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
  margin: 10px;
  transition: transform 0.2s, box-shadow 0.2s;

  :hover {
    transform: translateY(-2px);
    box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.05);
  }
`;
