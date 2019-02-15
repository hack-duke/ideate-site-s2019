import React from 'react';
import styled from '@emotion/styled';

import { Planet } from './Planet.js';
import { Section } from './Section.js';

import AboutPlanet from './img/about-planet.svg';

export const About = () => (
  <>
    <Planet src={AboutPlanet} />
    <Section title="What is IDEATE?">
      <p>
        To explore a wide variety of possible solutions through generating a
        large quantity of diverse possible solutions, allowing you to step
        beyond the obvious and explore a range of ideas.
      </p>
    </Section>
  </>
);
