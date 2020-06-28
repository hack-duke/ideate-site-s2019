import React from 'react';
import styled from 'styled-components';
import Section from 'components/Section';
import { MainHeader } from 'components/typography';
import SocialBar from './components/SocialBar';
import RegisterButton from 'components/RegisterButton';

const Footer = () => {
  return (
    <Section sectionColor="#F8F0E7">
      <FooterHeader>READY TO CREATE YOUR OWN MOVEMENT?</FooterHeader>
      <div style={{ textAlign: 'center' }}>
        <RegisterButton>Register</RegisterButton>
      </div>
      <SocialBar />
    </Section>
  );
};

export default Footer;

const FooterHeader = styled(MainHeader)`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 50px;
`;
