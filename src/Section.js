import React from 'react';
import styled from '@emotion/styled';

export const SectionTitle = styled.h1`
  margin: 0 auto 40px;
  font-size: 1.5em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
`;

const SectionContent = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
`;

export const Section = ({ title, children }) => (
  <SectionWrapper>
    <SectionTitle>{title}</SectionTitle>
    <SectionContent>{children}</SectionContent>
  </SectionWrapper>
);
