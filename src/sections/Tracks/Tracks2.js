import React from 'react';
import Section from 'components/Section';
import { MainHeader } from 'components/typography';
import TrackBlock from './TrackBlock2.js';

import palette from 'assets/palette';
import styled from 'styled-components';
import trackInfo from './trackInfo';

const Tracks2 = () => {
  const trackBlockElems = trackInfo.map((info) => {
    return <TrackBlock info={info}/>;
  });

  return (
    <Section sectionColor={palette.green}>
      <MainHeader style={{ color: palette.white }}>TRACKS</MainHeader>
      <MainContainer>{trackBlockElems}</MainContainer>
    </Section>
  );
};

export default Tracks2;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;

  /* MEDIA QUERY FOR SMALLER SCREENS*/
  /* flex-direction: column; */
`;
