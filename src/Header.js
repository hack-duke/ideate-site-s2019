import React from 'react';
import styled from '@emotion/styled';

import { GRAD_START, BG_COLOR } from './ui.js';
import SunImage from './img/sun.svg';

const HeaderContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(${GRAD_START}, ${BG_COLOR});
  display: flex;
  position: relative;
`;

const Sun = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin: 0 auto;
  max-height: 240px;
`;

const HeaderText = styled.div`
  margin: auto;
  text-align: center;
  z-index: 5;
`;

const IdeateTitle = styled.h1`
  font-size: 3.333em;
  letter-spacing: 0.2em;
  font-weight: 600;
  margin-bottom: 40px;
  text-align: center;
`;

const Subtitle = styled.h3`
  font-size: 1.5em;
  line-height: 1.333em;
`;

const RegisterButton = styled.a`
  margin-top: 40px;
  display: inline-block;
  color: ${BG_COLOR};
  background-color: white;
  border: none;
  text-decoration: none;
  font-size: 1.25em;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
  transform-origin: bottom center;
  -webkit-tap-highlight-color: transparent;

  :hover {
    transform: translateY(-2px);
    box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.25);
  }

  :active {
    transform: translateY(-2px) scale(0.9);
    opacity: 0.85;
  }
`;

export const Header = () => (
  <HeaderContainer>
    <Sun src={SunImage} />
    <HeaderText>
      <IdeateTitle>IDEATE</IdeateTitle>
      <Subtitle>April 6th, 2019</Subtitle>
      <Subtitle>Duke University</Subtitle>
      <RegisterButton href="#">Register</RegisterButton>
    </HeaderText>
  </HeaderContainer>
);
