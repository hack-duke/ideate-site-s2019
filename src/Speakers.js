import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Planet } from './Planet.js';
import { Section, Subtitle, Paragraph, shadowBg } from './Section.js';

import SpeakersPlanet from './img/speakers-planet.svg';
import HenrikRydberg from './img/speakers/henrik-rydberg.jpg';
import RachelKnickmeyer from './img/speakers/rachel-knickmeyer.jpg';
import DonShin from './img/speakers/don-shin.jpg';
import ShreyaShankar from './img/speakers/shreya-shankar.jpg';
import BrandonDorn from './img/speakers/brandon-dorn.jpg';
import EthanGeyer from './img/speakers/ethan-geyer.jpg';
import RachaelDickens from './img/speakers/rachael-dickens.jpg';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  grid-gap: 50px;

  @media screen and (min-width: 768px) {
    grid-gap: 30px;
  }
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
  ${shadowBg};
`;

export const Speakers = () => (
  <>
    <Planet src={SpeakersPlanet} />
    <Section title="Speakers">
      <GridContainer>
        <GridItem>
          <SpeakerPlanet src={HenrikRydberg} />
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
        <GridItem>
          <SpeakerPlanet src={BrandonDorn} />
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
        </GridItem>
        <GridItem>
          <SpeakerPlanet src={RachelKnickmeyer} />
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
        </GridItem>
        <GridItem>
          <SpeakerPlanet src={DonShin} />
          <div>
            <SpeakerTitle>Don Shin</SpeakerTitle>
            <WorkshopTitle>Designing for VR</WorkshopTitle>
            <Paragraph>
              Don Shin is the founder of CrossComm, an award-winning mobile,
              web, and immersive app development studio headquartered in Durham,
              NC. Under Mr. Shin's leadership, the Durham, NC-based company has
              been recognized as one of the leading mobile app developers in the
              region by clutch.co, and has been nationally recognized as the the
              Minority Technology Firm of the Year (2015) by the US Dept. of
              Commerce. Mr. Shin graduated from Duke University (class of ’ 9)
              with a BA in Computer Science, Minor in Music, and Certificate in
              Film and Video; he is currently interested in exploring real-world
              uses for immersive technologies such as Augmented and Virtual
              Reality, as well as finding smart uses of blockchain for
              enterprise.
            </Paragraph>
          </div>
        </GridItem>
        <GridItem>
          <SpeakerPlanet src={ShreyaShankar} />
          <div>
            <SpeakerTitle>Shreya Shankar</SpeakerTitle>
            <WorkshopTitle>Visualizing Ideas</WorkshopTitle>
            <Paragraph>
              Shreya is a Mechanical Engineering & Visual Arts major graduating
              in May. Ideate holds a very special place in her heart, because
              she found and fell in love with design through this conference
              almost four years ago. As a designer, Shreya is captivated by the
              ability we have of creating the future and passionate about using
              good design to facilitate the growth of our society.
            </Paragraph>
          </div>
        </GridItem>
        <GridItem>
          <SpeakerPlanet src={EthanGeyer} />
          <div>
            <SpeakerTitle>Ethan Geyer</SpeakerTitle>
            <WorkshopTitle>
              Designing for AI (and Actually Delivering It)
            </WorkshopTitle>
            <Paragraph>
              Ethan Geyer is a Sr. User Experience Designer and Design Thinker
              at IBM, where he balances design at scale, designing for AI, and
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
        </GridItem>
        <GridItem>
          <SpeakerPlanet src={RachaelDickens} />
          <div>
            <SpeakerTitle>Rachael Dickens</SpeakerTitle>
            <WorkshopTitle>
              Designing for AI (and Actually Delivering It)
            </WorkshopTitle>
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
