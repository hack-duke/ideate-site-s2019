import React from 'react';
import styled from '@emotion/styled';

import { Planet } from './Planet.js';
import { Section } from './Section.js';

import SpeakersPlanet from './img/speakers-planet.svg';


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
  display: flex;
  flex-direction: column;
`;

const Header = styled.h3`
  font-size: 1.5em; 
  font-weight: bold;
  margin: 1.5em 0 0.5em;
`;

const SpeakerPlanet = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  object-fit: cover;
  border: 2px solid white;
`;

export const Speakers = () => (
  <>
    <Planet src={SpeakersPlanet} />
    <Section title="Speakers">
      <GridContainer>
        <GridItem>
        <SpeakerPlanet src={"https://placebear.com/200/300"} />
          <Header>
            FIRST LAST
          </Header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </GridItem>
        <GridItem>
        <SpeakerPlanet src={"https://placebear.com/200/300"} />
          <Header>
            FIRST LAST
          </Header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </GridItem>
        <GridItem>
        <SpeakerPlanet src={"https://placebear.com/200/300"} />
          <Header>
            FIRST LAST
          </Header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </GridItem>

      </GridContainer>

    </Section>

  </>
);
