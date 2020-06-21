import React from 'react';
import Section from 'components/Section';
import { MainHeader } from 'components/typography';
import SpeakerBlock from './components/SpeakerBlock';

import palette from 'assets/palette';
import styled from 'styled-components';
import speakerInfo from './speakerInfo';

const Speakers = () => {
  const speakerBlockElems = speakerInfo.map((info) => {
    return <SpeakerBlock info={info} />;
  });

  return (
    <Section sectionColor={palette.white}>
      <MainHeader style={{ marginBottom: 30 }}>SPEAKERS</MainHeader>
      <MainContainer>{speakerBlockElems}</MainContainer>
    </Section>
  );
};

export default Speakers;

const MainContainer = styled.div`
  background-color: ${palette.yellow};
  width: 80%;
  border-radius: 10px;
  padding: 80px 40px;
  margin: 0 auto;
`;
