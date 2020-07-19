import React from 'react';
import Section from 'components/Section';
import { MainHeader } from 'components/typography';
import SpeakerBlock from './components/SpeakerBlock';

import palette from 'assets/palette';
import styled from 'styled-components';
import speakerInfo from './speakerInfo';
import firstImg from './components/first.svg';
import secondImg from './components/second.svg';
import thirdImg from './components/third.svg';
import fourthImg from './components/fourth.svg';
import leftSidebarImg from './components/left-sidebar.svg';
import rightSidebarImg from './components/right-sidebar.svg';
import bustImg from './components/bust.svg';

const Speakers = () => {
  const speakerBlockElems = speakerInfo.map((info, idx) => {
    return (
      <SpeakerBlock
        info={info}
        imgSrc={imgArr[idx % 4]}
        imgStyle={imgStyle[idx % 4]}
      />
    );
  });

  return (
    <Section sectionColor={palette.white} sectionId="speakers">
      <MainHeader style={{ marginBottom: 30 }}>SPEAKERS</MainHeader>
      <MainContainer>
        {/*remove this next line for actual speaker section*/}
        <SidebarImg src={leftSidebarImg} />
        <CenterContainer>{speakerBlockElems}</CenterContainer>
        <RightContainer>
          <SidebarImg src={rightSidebarImg} />
          <BustImg src={bustImg} />
        </RightContainer>
      </MainContainer>
    </Section>
  );
};

export default Speakers;

const imgArr = [firstImg, secondImg, thirdImg, fourthImg];
const firstStyle = `

`;
const secondStyle = `
  width: 80%;
  margin-top: -30px;
`;
const thirdStyle = `
  width: 80%;
`;
const fourthStyle = `
  width: 80%;
`;
const imgStyle = [firstStyle, secondStyle, thirdStyle, fourthStyle];

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const SidebarImg = styled.img`
  @media (max-width: 1100px) {
    display: none;
  }
`;

const CenterContainer = styled.div`
  background-color: ${palette.yellow};
  width: 100%;
  border-radius: 10px;
  padding: 80px 40px;
  margin: 0 80px;

  @media (max-width: 1100px) {
    margin: 0;
  }

  /* temp coming soon styles */
  font-size: 24px;
  text-align: center;
  opacity: 75%;
`;

const RightContainer = styled.div`
  position: relative;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const BustImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-70%, -50%);
  max-width: 225px;
`;
