import React, { useState } from 'react';
import { BodyHeader, BodyText } from 'components/typography';

import styled from 'styled-components';
import palette from 'assets/palette';

const ScheduleRow = ({ info }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <EventRow>
      <EventTime>
        {info.start}
        <br />
        {info.end}
      </EventTime>
      <EventInfo>
        <BodyHeader>{info.name}</BodyHeader>
        <BodyText>{info.description}</BodyText>
        {/* <BodyText style={{fontSize:16}}>{info.link}</BodyText> */}
        {info.additional && (
          <div>
            {isOpen && (
              <BodyText style={{ marginTop: 10 }}>{info.additional}</BodyText>
            )}
            <p onClick={() => setIsOpen((v) => !v)}>
              See {isOpen ? 'Less' : 'More'}
            </p>
          </div>
        )}
      </EventInfo>
    </EventRow>
  );
};

export default ScheduleRow;

const dateColSmWidth = '120px';

const EventRow = styled('div')`
  display: flex;
  line-height: 1.44em;

  :first-child > div {
    padding-top: 40px;
  }
  :last-child > div {
    padding-bottom: 100px;
  }
`;

const EventTime = styled('div')`
  flex-basis: ${dateColSmWidth};
  flex-grow: 0;
  flex-shrink: 0;
  overflow: hidden;

  font-weight: 500;
  font-size: 20px;
  padding: 15px 25px;
`;
const EventInfo = styled('div')`
  padding: 17px 35px;

  @media (max-width: 700px) {
    padding: 17px 20px;
  }
`;
