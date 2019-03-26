import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Planet } from './Planet.js';
import { Section, Subtitle, Paragraph, bodyTextStyle } from './Section.js';

import SpeakersPlanet from './img/speakers-planet.svg';
import HenrikPhoto from './img/henrik-photo.jpg';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
`;

const GridItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto 1fr;
    grid-gap: 50px;
  }
`;

const SpeakerPlanet = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  display: block;
  object-fit: cover;
  border: 2px solid white;
  margin: 0 auto;
`;

const SpeakerTitle = props => (
  <Subtitle
    {...props}
    css={css`
      margin-bottom: 0.2em;
    `}
  />
);

const WorkshopTitle = styled.h4`
  font-size: 0.9em;
  font-weight: 600;
  margin-bottom: 1.2em;
  text-transform: uppercase;
`;

export const Speakers = () => (
  <>
    <Planet src={SpeakersPlanet} />
    <Section title="Speakers">
      <GridContainer>
        <GridItem>
          <SpeakerPlanet src={HenrikPhoto} />
          <div>
            <SpeakerTitle>Henrik Rydberg</SpeakerTitle>
            <WorkshopTitle>Keynote Speaker</WorkshopTitle>
            <Paragraph>
              Design is at the heart of building successful businesses and
              products, right? In his 17 years of leading design teams, Henrik
              has crafted design-centric organizations and molded designers to
              become the most influential people in their companies—and in his
              talk he removes design from the center of it all. Henrik proposes
              an inclusive worldview and approach for designers that increases
              their influence and makes them more impactful. Henrik is currently
              the VP of Design at Jetty, a financial services startup for
              everyday renters.
            </Paragraph>
          </div>
        </GridItem>
      </GridContainer>
    </Section>
  </>
);
