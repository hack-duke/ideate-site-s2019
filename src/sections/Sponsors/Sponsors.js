import React from 'react';
import styled from 'styled-components';
import Section from 'components/Section';
import { MainHeader } from 'components/typography';
import SponsorContainer from './components/SponsorContainer';
import sponsorsBackgroundImg from './components/sponsors-background.svg';
import palette from 'assets/palette';

const Sponsors = () => {
  return (
    <Section
      sectionColor={palette.blue}
      innerContainerStyles={{ padding: 0, maxWidth: 1500 }}
      sectionId="sponsors"
    >
      <ImgWrapper>
        <MainHeader style={{ color: palette.white}}>
          SPONSORS
        </MainHeader>
        <SponsorContainer />
      </ImgWrapper>
    </Section>
  );
};

export default Sponsors;

const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${sponsorsBackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 175px 30px;

  @media (max-width: 600px) {
    background-image: none;
    background-color: ${palette.blue};
  }
`;
