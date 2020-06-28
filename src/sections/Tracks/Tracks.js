import React from 'react';
import Section from 'components/Section';
import { MainHeader } from 'components/typography';
import TrackBlock from './components/TrackBlock.js';
import trackInfo from './trackInfo';

import palette from 'assets/palette';
import styled from 'styled-components';

const Tracks = () => {
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

export default Tracks;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;

  /* MEDIA QUERY FOR SMALLER SCREENS*/
  /* flex-direction: column; */
`;
