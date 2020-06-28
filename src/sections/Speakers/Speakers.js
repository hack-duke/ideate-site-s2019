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
    <Section sectionColor={palette.white}>
      <MainHeader style={{ marginBottom: 30 }}>SPEAKERS</MainHeader>
      <MainContainer>
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
`;

const SidebarImg = styled.img``;

const CenterContainer = styled.div`
  background-color: ${palette.yellow};
  width: 80%;
  border-radius: 10px;
  padding: 80px 40px;
  margin: 0 auto;
`;

const RightContainer = styled.div`
  position: relative;
`;

const BustImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 300px;
`;
