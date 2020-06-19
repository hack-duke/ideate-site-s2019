import React from 'react';
import styled from 'styled-components';

const Section = (props) => {
  return (
    <OuterContainer sectionColor={props.sectionColor}>
      <InnerContainer>{props.children}</InnerContainer>
    </OuterContainer>
  );
};

export default Section;

const OuterContainer = styled.div`
  background-color: ${(props) => props.sectionColor};
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
`;
