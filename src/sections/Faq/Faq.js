import React from 'react';
import Section from 'components/Section';
import { MainHeader } from 'components/typography';

import palette from 'assets/palette';

const Faq = () => {
  return (
    <Section sectionColor={palette.black}>
      <MainHeader style={{ color: palette.white }}>FAQ</MainHeader>
    </Section>
  );
};

export default Faq;
