import React from 'react';
import Section from 'components/Section';
import { MainHeader } from 'components/typography';

import palette from 'assets/palette';

const Tracks = () => {
  return (
    <Section sectionColor={palette.green}>
      <MainHeader style={{ color: palette.white }}>TRACKS</MainHeader>
    </Section>
  );
};

export default Tracks;
