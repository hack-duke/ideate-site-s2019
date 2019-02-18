import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { GRAD_START, BG_COLOR } from './ui.js';
import { Button } from './Button.js';
import SunImage from './img/sun.svg';

const HeaderContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(${GRAD_START}, ${BG_COLOR});
  display: flex;
  position: relative;

  @media screen and (min-width: 1600px) {
    margin-bottom: 40px;
  }
`;

const Sun = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin: 0 auto;
  max-height: 225px;
`;

const HeaderText = styled.div`
  margin: auto;
  text-align: center;
  z-index: 5;
  padding: 0 24px;
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

export const Header = () => (
  <HeaderContainer>
    <Sun src={SunImage} />
    <HeaderText>
      <IdeateTitle>IDEATE</IdeateTitle>
      <Subtitle>April 6th, 2019</Subtitle>
      <Subtitle>Duke University</Subtitle>
      <Button
        href="#"
        css={css`
          margin-top: 40px;
        `}
      >
        Register
      </Button>
    </HeaderText>
  </HeaderContainer>
);
