import React from 'react';
import Section from 'components/Section';
import { MainHeader } from 'components/typography';

import palette from 'assets/palette';

const Speakers = () => {
  return (
    <Section sectionColor={palette.white}>
      <MainHeader>SPEAKERS</MainHeader>
    </Section>
  );
};

export default Speakers;
