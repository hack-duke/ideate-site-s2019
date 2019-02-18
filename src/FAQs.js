import React from 'react';
import styled from '@emotion/styled';

import { Planet } from './Planet.js';
import { Section } from './Section.js';

import FAQsPlanet from './img/faqs-planet.svg';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 50px;
  grid-column-gap:30px;
  grid-auto-rows: minmax(100px, auto);
  width: 100%;

  @media screen and (min-width: 480px) {
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

const Header = styled.h3`
  font-weight: bold;
  margin-bottom: 1em;
`;

export const FAQs = () => (
  <>
    <Planet src={FAQsPlanet} />
    <Section title="FAQs">
      <GridContainer>
        <GridItem>
          <Header>
            Is this event open for everyone?
          </Header>
          <p>
            Due to venue capacity, we are only able to accept the first 200 that apply. Registration will be open shortly!
            </p>
        </GridItem>
        <GridItem>
          <Header>
            Is transportation provided?
          </Header>
          <p>
            Duke has transportation from both West and East Campus to Gross Hall. From the chapel, it's less than a 10 minute walk. If you are driving, there is the Bryan Center parking lot nearby!
            </p>
        </GridItem>
        <GridItem>
          <Header>
            Do I need to bring anything specific to the event?
          </Header>
          <p>
            Bring your laptop, student ID/government ID, and your design soul!
            </p>
        </GridItem>
        <GridItem>
          <Header>
            Lorem ipsum dolor sit amet
          </Header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </GridItem>
        <GridItem>
          <Header>
            Lorem ipsum dolor sit amet
          </Header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </GridItem>
        <GridItem>
          <Header>
            Lorem ipsum dolor sit amet
          </Header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </GridItem>

      </GridContainer>

    </Section>
  </>
);
