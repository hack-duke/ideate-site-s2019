import React from 'react';
import styled from 'styled-components';
import Section from 'components/Section';
import { MainHeader } from 'components/typography';
import SocialBar from './components/SocialBar';
import RegisterButton from 'components/RegisterButton';
import footerBackgroundImg from './components/footer-background.svg';

const Footer = () => {
  return (
    <Section
      sectionColor="#F8F0E7"
      sectionId="footer"
      innerContainerStyles={{ padding: 0, maxWidth: 1500 }}
    >
      <ImgWrapper>
        <FooterHeader style={{ fontSize: 40 }}>
          READY TO CREATE YOUR OWN MOVEMENT?
        </FooterHeader>
        <div style={{ textAlign: 'center' }}>
          <a
            href="https://hackduke.typeform.com/to/y9azDRuZ?fbclid=IwAR2uJtnrA-ozDXFOwzGo0hkfqD1XWsYYfOuhgTPOucUEzMPNvj9vi4uYszA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RegisterButton>Register</RegisterButton>
          </a>
        </div>
        <SocialBar />
      </ImgWrapper>
    </Section>
  );
};

export default Footer;

const FooterHeader = styled(MainHeader)`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${footerBackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 175px 30px;

  @media (max-width: 600px) {
    background-image: none;
  }
`;
