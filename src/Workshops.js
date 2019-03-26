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

export const Workshops = () => (
  <>
    <Planet src={SpeakersPlanet} />
    <Section title="Workshops">
      <GridContainer>
        <GridItem>
          <SpeakerPlanet src={HenrikPhoto} />
          <div>
            <SpeakerTitle>Brandon Dorn</SpeakerTitle>
            <WorkshopTitle>
              Usable, Beautiful, Good: Human Values in Design
            </WorkshopTitle>
            <Paragraph>
              Originally from Illinois, where he studied English Literature and
              Economics, Brandon is a Sr. User Experience Designer at Viget who
              brings clarity and courtesy to complex digital products. Brandon
              has been enamored with functional elegance since he first saw a
              MINI Cooper. He gets his hands dirty with information
              architecture, user research, and prototyping, and finds
              inspiration in Scandinavian design and prairie sunsets.
            </Paragraph>
          </div>
          <SpeakerPlanet src={HenrikPhoto} />
          <div>
            <SpeakerTitle>Rachel Knickmeyer</SpeakerTitle>
            <WorkshopTitle>
              Design at Capital One: Why It's Cool to Work at the Bank
            </WorkshopTitle>
            <Paragraph>
              Rachel Knickmeyer is the Design Lead for Card Ecosystems at
              Capital One. She studied Computer Science, then Human Computer
              Interaction, and has worked in User Experience for around 13
              years. Her speciality is Information Architecture, Systems
              Thinking and Servant Leadership. These days all in service of
              Changing Banking for Good.
            </Paragraph>
          </div>
          <SpeakerPlanet src={HenrikPhoto} />
          <div>
            <SpeakerTitle>Mike Harris</SpeakerTitle>
            <WorkshopTitle>Designing for VR</WorkshopTitle>
            <Paragraph>
              Mike Harris is a Virtual and Augmented Reality developer from New
              Orleans, Louisiana with over four years experience developing
              applications on a variety of Virtual and Augmented Reality
              platforms and devices. In addition to his commercial work, Mike is
              also a passionate independent developer and has been featured as
              part of the Toronto International Film Festival and The Verge’s
              POP V R installation series. Mike is currently Lead Immersive
              Technologies Developer at the award-winning Durham-based software
              development firm CrossComm.
            </Paragraph>
          </div>
          <SpeakerPlanet src={HenrikPhoto} />
          <div>
            <SpeakerTitle>Shreya Shankar</SpeakerTitle>
            <WorkshopTitle>Visualizing Ideas</WorkshopTitle>
            <Paragraph>
              I am a Mechanical Engineering & Visual Arts major graduating in
              May. Ideate holds a very special place in my heart, because I
              found and fell in love with design through this conference almost
              four years ago. As a designer, I'm captivated by the ability we
              have of creating the future and passionate about using good design
              to facilitate the growth of our society.
            </Paragraph>
          </div>
          <SpeakerPlanet src={HenrikPhoto} />

          <div>
            <SpeakerTitle>Ethan Geyer and Rachael Dickens</SpeakerTitle>
            <WorkshopTitle>TBD</WorkshopTitle>
            <Paragraph>
              Ethan Geyer is a Sr. User Experience Designer and Design Thinker
              at IBM, where he balances design at scale, designing for Ai, and
              the complexities of global enterprise software all while sweating
              the small stuff and advocating for the user. He believes in the
              foundational power of relationships to affect outcomes in fast
              moving product teams and relishes the opportunity to tackle
              cultural transformation at the organizational level. In a past
              life he worked with at-risk youth and young adults in the desert
              wilds of Utah — starting fires by rubbing sticks together and
              sleeping under the stars. Outside of work, he loves to explore
              wild places with his wife, daughter and their hound dog.
            </Paragraph>
          </div>
          <SpeakerPlanet src={HenrikPhoto} />
          <div>
            <Paragraph>
              Rachael Dickens is a Sr. User Experience Designer and Design
              Thinker. She joined IBM in 2013 after receiving her Master of
              Graphic Design and Certificate of Accomplishment in Teaching from
              North Carolina State University. She led AI design for Watson
              Workspace and Watson Work Services and now leads design for
              multiple products in IBM’s Marketing, Commerce and Supply chain
              portfolio. An experienced Design Thinking facilitator, she is
              passionate about co-creating innovative user experiences and
              bringing Design Thinking to those outside of the
              discipline—regularly collaborating with users, partners,
              developers, researchers and more. Outside of work, she loves to
              build things, grow things and cook things.
            </Paragraph>
          </div>
        </GridItem>
      </GridContainer>
    </Section>
  </>
);
