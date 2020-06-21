import React from 'react';
import { BodyHeader, BodyText } from 'components/typography';

import styled from 'styled-components';

const SpeakerBlock = ({ info }) => {
  return (
    <Container>
      <ImgContainer />
      <InfoContainer>
        <BodyHeader>{info.name}</BodyHeader>
        <BodyHeader style={{ marginBottom: 20 }}>{info.title}</BodyHeader>
        <BodyText>{info.description}</BodyText>
      </InfoContainer>
    </Container>
  );
};

export default SpeakerBlock;

const Container = styled.div`
  display: flex;
  flex-direction: row;

  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const ImgContainer = styled.div`
  height: 125px;
  width: 200px;
  background-color: gray;
  margin-right: 20px;
  opacity: 0.4;
  border-radius: 6px;
`;

const InfoContainer = styled.div`
  flex: 1;
`;
