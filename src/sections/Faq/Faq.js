import React from 'react';
import styled from 'styled-components';
import Section from 'components/Section';
import { MainHeader } from 'components/typography';

import FaqBlock from './components/FaqBlock';
import faqInfo from './components/faqInfo';
import palette from 'assets/palette';

const Faq = () => {
  const faqElems = faqInfo.map((faq, i) => {
    console.log(faq);
    return (
      <FaqBlock
        key={i}
        questionText={faq.questionText}
        answerText={faq.answerText}
      />
    );
  });

  return (
    <Section sectionColor={palette.black}>
      <MainHeader style={{ color: palette.white, marginBottom: 100 }}>
        FAQ
      </MainHeader>
      <MainContainer>{faqElems}</MainContainer>
    </Section>
  );
};

export default Faq;

const MainContainer = styled.div`
  display: grid;
  column-gap: 50px;
  row-gap: 50px;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  max-width: 800px;

  /* @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  } */
`;
