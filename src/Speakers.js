import React from 'react';
import styled from '@emotion/styled';

import { Planet } from './Planet.js';
import { Section, Subtitle, Paragraph, bodyTextStyle } from './Section.js';

import SpeakersPlanet from './img/speakers-planet.svg';
import HenrikPhoto from './img/henrik-photo.jpg';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  width: 100%;

  /* Remove once we have more speakers */
  max-width: 600px;
  margin: 0 auto;

  /*
  @media screen and (min-width: 480px) {
    grid-row-gap: 50px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  */
`;

const GridItem = styled.div`
  grid-row: auto;
  grid-column: auto;
  display: flex;
  flex-direction: column;
`;

const SpeakerPlanet = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  display: block;
  margin: 0 auto 35px;
  object-fit: cover;
  border: 2px solid white;
`;

const TBAText = styled.div`
  ${bodyTextStyle};
  text-align: center;
`;

export const Speakers = () => (
  <>
    <Planet src={SpeakersPlanet} />
    <Section title="Speakers">
      <GridContainer>
        <GridItem>
          <SpeakerPlanet src={HenrikPhoto} />
          <Subtitle>Henrik Rydberg | Keynote Speaker</Subtitle>
          <Paragraph>
            Design is at the heart of building successful businesses and
            products, right? In his 17 years of leading design teams, Henrik has
            crafter design centric organizations and grown designers to become
            most influential people in the company—and in his talk he removes
            design from the center of it all. Henrik proposes an inclusive world
            view and approach for designers that increases their influence, and
            makes them more impactful.
          </Paragraph>
        </GridItem>
      </GridContainer>
    </Section>
  </>
);
