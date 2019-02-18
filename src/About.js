import React from 'react';
import styled from '@emotion/styled';

import { Planet } from './Planet.js';
import { Section, Subtitle, Paragraph } from './Section.js';

import AboutPlanet from './img/about-planet.svg';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  max-width: 640px;
  margin: 0 auto;
`;

export const About = () => (
  <>
    <Planet src={AboutPlanet} />
    <Section title="What is IDEATE?">
      <GridContainer>
        <div>
          <Subtitle>Ideate | īdēˌāt | vb.</Subtitle>
          <Paragraph>
            To explore a wide variety of possible solutions through generating a
            large quantity of diverse possible soutions, allowing you to step
            beyond the obvious and explore a range of ideas.
          </Paragraph>
        </div>
        <div>
          <Subtitle>Ideate @ Duke is...</Subtitle>
          <Paragraph>
            A one-day conference filled with awesome speakers and workshops to
            explore how design and innovation interact. Ideate aims to observe
            how design-thinking can be applied across field, and is open to
            design aficionados, curious newcomers, and everyone in between!
          </Paragraph>
        </div>
      </GridContainer>
    </Section>
  </>
);
