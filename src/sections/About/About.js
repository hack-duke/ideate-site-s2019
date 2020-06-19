import React from 'react';
import Section from 'components/Section';
import { MainHeader } from 'components/typography';

import palette from 'assets/palette';

const About = () => {
  return (
    <Section sectionColor={palette.yellow}>
      <MainHeader>ABOUT</MainHeader>
    </Section>
  );
};

export default About;
