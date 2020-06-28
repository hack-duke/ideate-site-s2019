import React from 'react';
import { BodyHeader, BodyText } from 'components/typography';

import styled from 'styled-components';

const SpeakerBlock = ({ info, imgSrc, imgStyle }) => {
  return (
    <Container>
      <ImgContainer>
        <Icon src={imgSrc} imgStyle={imgStyle} />
      </ImgContainer>
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
  /* width: 200px; */
  margin-right: 40px;
  border-radius: 6px;
  flex-basis: 30%;
  text-align: right;
`;

const Icon = styled.img`
  width: 100%;
  ${(props) => props.imgStyle}
`;

const InfoContainer = styled.div`
  flex-basis: 70%;
`;
