import React from 'react';
import styled from 'styled-components';

const Section = ({
  children,
  sectionColor,
  innerContainerStyles,
  outerContainerStyles,
  sectionId,
}) => {
  return (
    <OuterContainer
      id={sectionId}
      style={outerContainerStyles}
      sectionColor={sectionColor}
    >
      <InnerContainer style={innerContainerStyles}>{children}</InnerContainer>
    </OuterContainer>
  );
};

export default Section;

const OuterContainer = styled.div`
  background-color: ${(props) => props.sectionColor};
  overflow: hidden;
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 150px 20px;
  margin: 0 auto;
`;
