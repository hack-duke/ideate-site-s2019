import React from 'react';
import Section from 'components/Section';
import { MainHeader, BodyHeader, BodyText } from 'components/typography';

import palette from 'assets/palette';
import styled from 'styled-components';
import rocket from './rocket.svg';

const About = () => {
  console.log('Change Indicator 1');
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
        <BodyHeader>Ideate 2020 @ Duke is...</BodyHeader>
        <BodyText style={{ marginTop: 20 }}>
          A two-day virtual designathon filled with awesome speakers, workshops,
          and a design challenge to explore how design and innovation interact.
          Ideate aims to observe how design thinking can be applied across
          fields, and is open to design aficionados, curious newcomers, and
          everyone in between!
        </BodyText>
      </Paragraph>

      <Paragraph>
        <BodyHeader>Our Purpose</BodyHeader>
        <BodyText style={{ marginTop: 20 }}>
          We hope that Ideate will inspire students from all backgrounds to
          incorporate design thinking as part of their innovation process and to
          use it as a tool in their endeavors.
          As Duke's annual design conference, we’re here to show you
          how design isn’t just about drawing or Adobe software: it enhances
          technology by creating intuitive and meaningful experiences, it draws
          on psychology to understand end-users, and it creates successful
          businesses by driving human-centered development of product solutions.
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
