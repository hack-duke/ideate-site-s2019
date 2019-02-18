import React from 'react';
import styled from '@emotion/styled';

import { Planet } from './Planet.js';
import { Section } from './Section.js';
import { BG_COLOR } from './ui.js';

import FooterPlanet from './img/footer-planet.svg';

export const Footer = () => (
  <>
    <Planet src={FooterPlanet} />
    <Section>
      <HypeMessage>Are you ready to take off?</HypeMessage>
      <CenterButton>
        <ApplyButton>Apply Now</ApplyButton>
      </CenterButton>
    </Section>
  </>
);

const HypeMessage = styled.h1`
  text-transform: uppercase;
  margin: 0 auto;
  font-size: 2em;
`;

const CenterButton = styled.div`
  display: flex;
  justify-content: center;
`;

const ApplyButton = styled.a`
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