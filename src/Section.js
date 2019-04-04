import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { SHADOW_BG_COLOR } from './ui.js';

export const shadowBg = css`
  box-shadow: 0px 0px 10px 10px ${SHADOW_BG_COLOR};
  background-color: ${SHADOW_BG_COLOR};
`;

export const SectionTitle = styled.h1`
  margin: 0 auto 40px;
  font-size: 2em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
  text-align: center;
  ${shadowBg}
`;

export const Subtitle = styled.h3`
  font-size: 1.25em;
  font-weight: 600;
  margin-bottom: 0.75em;
  ${shadowBg}
`;

export const bodyTextStyle = css`
  opacity: 0.75;
  font-weight: 300;
`;

export const Paragraph = styled.p`
  ${shadowBg}
  ${bodyTextStyle}
`;

const SectionContent = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
`;

export const Section = ({ title, children }) => (
  <SectionWrapper>
    <SectionTitle>{title}</SectionTitle>
    <SectionContent>{children}</SectionContent>
  </SectionWrapper>
);
