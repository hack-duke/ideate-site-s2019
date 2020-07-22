import React from 'react';
import { BodyHeader, BodyText } from 'components/typography';

import styled from 'styled-components';

const SpeakerBlock = ({ info, imgSrc, imgStyle }) => {
  console.log(info.images);
  return (
    <Container>
      <ImgContainer style={{margin:'auto'}}>
        {info.images.map((image) => {
          return <ImgBlock src={image} />;
        })}
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
  flex-direction: column;

  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImgBlock = styled.img`
  display: inline-block;
  max-width: 150px;
  width: 100%;

  :not(:last-child) {
    margin-right: 20px;
  }
  margin-bottom: 20px;
`;

const Icon = styled.img`
  width: 100%;
  ${(props) => props.imgStyle}
`;

const InfoContainer = styled.div`
  flex-basis: 100%;

  @media (max-width: 700px) {
    flex-basis: 100%;
  }
`;
