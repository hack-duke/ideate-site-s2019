import React from 'react';
import Section from 'components/Section';
import { MainHeader, BodyHeader, BodyText } from 'components/typography';

import palette from 'assets/palette';
import styled from 'styled-components';
import rocket from './rocket.svg';

const About = () => {
  return (
    <Section sectionColor={palette.yellow} sectionId="about">
      <img
        src={rocket}
        style={{ display: 'block', margin: '-70px auto 20px auto' }}
        alt="About Icon"
      />
      <MainHeader>WHAT IS IDEATE?</MainHeader>

      <Paragraph>
        <BodyHeader> Ideate | ˈīdēˌāt | vb.</BodyHeader>
        <BodyText style={{ marginTop: 20 }}>
          To explore a wide variety of possible solutions through generating a
          large quantity of diverse possible soutions, allowing you to step
          beyond the obvious and explore a range of ideas.
        </BodyText>
      </Paragraph>

      <Paragraph>
        <BodyHeader>Ideate @ Duke is...</BodyHeader>
        <BodyText style={{ marginTop: 20 }}>
          A two-day virtual designathon filled with awesome speakers, workshops,
          and a design challenge to explore how design and innovation interact.
          Ideate aims to observe how design thinking can be applied across
          fields, and is open to design aficionados, curious newcomers, and
          everyone in between!
        </BodyText>
      </Paragraph>
    </Section>
  );
};

export default About;

const Paragraph = styled.div`
  margin: auto;
  margin-top: 40px;
  width: 100%;
  max-width: 650px;
`;
