import React from 'react';
import styled from '@emotion/styled';

import { Planet } from './Planet.js';
import { Section, Subtitle, Paragraph } from './Section.js';

import FAQsPlanet from './img/faqs-planet.svg';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  width: 100%;

  @media screen and (min-width: 480px) {
    grid-row-gap: 50px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GridItem = styled.div`
  grid-row: auto;
  grid-column: auto;
`;

export const FAQs = () => (
  <>
    <Planet src={FAQsPlanet} />
    <Section title="FAQs">
      <GridContainer>
        <GridItem>
          <Subtitle>Is this event open for everyone?</Subtitle>
          <Paragraph>
            Due to venue capacity, we are only able to accept the first 200 that
            apply. Registration will be open shortly!
          </Paragraph>
        </GridItem>
        <GridItem>
          <Subtitle>Is transportation provided?</Subtitle>
          <Paragraph>
            Duke has transportation from both West and East Campus to Gross
            Hall. From the chapel, it's less than a 10 minute walk. If you are
            driving, there is the Bryan Center parking lot nearby!
          </Paragraph>
        </GridItem>
        <GridItem>
          <Subtitle>
            Do I need to bring anything specific to the event?
          </Subtitle>
          <Paragraph>
            Bring your laptop, student ID/government ID, and your design soul!
          </Paragraph>
        </GridItem>
      </GridContainer>
    </Section>
  </>
);
