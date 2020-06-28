import React from 'react';
import styled from 'styled-components';

import Section from 'components/Section';
import { MainHeader } from 'components/typography';
import Navbar from './components/Navbar';
import ideateLogoImg from './components/ideate-logo.svg';
import RegisterButton from 'components/RegisterButton';
import landingBackgroundImg from './components/landing-background.svg';

const Landing = () => {
  return (
    <Section
      sectionColor="#333232"
      innerContainerStyles={{ paddingTop: 0, paddingBottom: 0 }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${landingBackgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div style={{ paddingTop: 30, paddingBottom: 300 }}>
          <Navbar />
          <Subtitle>a virtual designathon | July 25-26, 2020</Subtitle>
          <MainHeader>LANDING</MainHeader>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <IdeateLogo src={ideateLogoImg} />
            <RegisterButton>Register</RegisterButton>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Landing;

const Subtitle = styled.p`
  font-size: 28px;
  color: #f8f0e7;
  text-align: center;
  padding-top: 200px;
`;

const IdeateLogo = styled.img`
  width: 100%;
  max-width: 800px;
  margin-bottom: 50px;
`;
