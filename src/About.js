import React from 'react';
import styled from '@emotion/styled';

import { Planet } from './Planet.js';
import { Section } from './Section.js';

import AboutPlanet from './img/about-planet.svg';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 20px;
  max-width: 640px;
  margin: 0 auto;
`;

const GridItem = styled.div`
  grid-row: auto;
  grid-column: auto;
`;

const Header = styled.h3`
  font-weight: 600;
`;

export const About = () => (
  <>
    <Planet src={AboutPlanet} />
    <Section title="What is IDEATE?">
      <GridContainer>
        <GridItem>
          <Header>Ideate | īdēˌāt | vb.</Header>
          <p>
            To explore a wide variety of possible solutions through generating a
            large quantity of diverse possible soutions, allowing you to step
            beyond the obvious and explore a range of ideas.
          </p>
        </GridItem>
        <GridItem>
          <Header>Ideate @ Duke is...</Header>
          <p>
            A one-day conference filled with awesome speakers and workshops to
            explore how design and innovation interact. Ideate aims to observe
            how design-thinking can be applied across field, and is open to
            design aficionados, curious newcomers, and everyone in between!
          </p>
        </GridItem>
      </GridContainer>
    </Section>
  </>
);
