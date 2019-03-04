import React from 'react';
import styled from '@emotion/styled';

import { Planet } from './Planet.js';
import { Section } from './Section.js';
import { Button } from './Button.js';

import FooterPlanet from './img/footer-planet.svg';
import { Asteroids } from './Asteroids.js';

export const Footer = () => (
  <>
    <Planet src={FooterPlanet} />
    <Section title="Are you ready to take off?">
      <CenterButton>
        <Button href="/apply">Apply Now</Button>
      </CenterButton>
    </Section>
    <Astroids src={Asteroids} />
  </>
);

const CenterButton = styled.div`
  display: flex;
  justify-content: center;
`;
