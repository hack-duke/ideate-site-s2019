import React from 'react';
import Section from 'components/Section';
import { MainHeader } from 'components/typography';

import palette from 'assets/palette';

const Schedule = () => {
  return (
    <Section sectionColor={palette.red} sectionId="schedule">
      <MainHeader style={{ color: palette.white }}>SCHEDULE</MainHeader>
    </Section>
  );
};

export default Schedule;
