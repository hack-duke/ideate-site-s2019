import React from 'react';
import styled from 'styled-components';
import Section from 'components/Section';
import { MainHeader } from 'components/typography';
import SocialBar from './components/SocialBar';

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
`;

const RegisterButton = styled.div`
  background-color: white;
  border-radius: 6px;
  font-size: 28px;
  padding: 15px 50px;
  display: inline-block;
  margin: 0 auto;
  margin-top: 50px;
`;
