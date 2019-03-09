import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { GRAD_START } from './ui.js';
import { bodyTextStyle } from './Section.js';
import { Button } from './Button.js';
import { Sun } from './Sun.js';

const HeaderContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(${GRAD_START}, transparent);
  display: flex;
  position: relative;

  @media screen and (min-width: 1600px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1840px) {
    margin-bottom: 50px;
  }
`;

const HeaderText = styled.div`
  margin: auto;
  text-align: center;
  z-index: 5;
  padding: 0 24px;
`;

const IdeateTitle = styled.h1`
  font-size: 3.5em;
  letter-spacing: 0.2em;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 60px;
  text-align: center;
`;

const Description = styled.h3`
  font-size: 1.5em;
  line-height: 1.333em;
  ${bodyTextStyle}
`;

const Date = styled.h3`
  font-size: 1.5em;
  line-height: 1.333em;
  ${bodyTextStyle}
`;

const Location = styled.h3`
  font-size: 1.5em;
  line-height: 1.333em;
  ${bodyTextStyle}
`;

export const Header = () => (
  <HeaderContainer>
    <Sun />
    <HeaderText>
      <IdeateTitle>IDEATE</IdeateTitle>
      <Description>A student innovation & design conference </Description>
      <Date>April 6th, 2019 at Gross Hall</Date>
      <Button
        href="/apply"
        css={css`
          margin-top: 40px;
        `}
      >
        Register
      </Button>
    </HeaderText>
  </HeaderContainer>
);
