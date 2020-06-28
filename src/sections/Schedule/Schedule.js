import React from 'react';
import Section from 'components/Section';
import { MainHeader } from 'components/typography';

import palette from 'assets/palette';
import sidebar from './components/sidebar.svg';

const Schedule = () => {
  return (
    <Section sectionColor={palette.red}>
      <MainHeader style={{ color: palette.white }}>SCHEDULE</MainHeader>
    </Section>
  );
};

export default Schedule;
