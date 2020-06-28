import React from 'react';
import { BodyHeader, BodyText } from 'components/typography';

import palette from 'assets/palette';
import styled from 'styled-components';

const TrackBlock = ({ info }) => {
  return (
    <Container>
      <img src={info.image} style={{height: 175}}/>

      <BodyHeader
        style={{margin: '40px auto 0px auto'}}>
        {info.title}
      </BodyHeader>

      <BodyText
        style={{fontSize: '21px', marginTop: 35, verticalAlign: 'text-top'}}>
        {info.description}
      </BodyText>
    </Container>
  );
};

export default TrackBlock;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 384px;
  padding: 80px 35px;
  margin: 70px 17px;
  border-radius: 10px;
  background-color: ${palette.white};

  /* MEDIA QUERY FOR SMALLER SCREENS*/
  /* margin: 70px auto; */
`;
