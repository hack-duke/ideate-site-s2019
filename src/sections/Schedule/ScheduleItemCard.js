import React, { Component } from 'react';
import { BodyHeader, BodyText } from 'components/typography';

import styled from 'styled-components';
import palette from 'assets/palette';

class ScheduleItemCard extends Component {
  render() {
    const events = this.props.events;

    return (
      <CardBase>
        {events.map(({ start, end, name, description }) => (
          <EventRow>
            <EventTime>
              {start}
              <br />
              {end}
            </EventTime>
            <EventInfo>
              <BodyHeader>{name}</BodyHeader>
              <BodyText>{description}</BodyText>
            </EventInfo>
          </EventRow>
        ))}
      </CardBase>
    );
  }
}

export default ScheduleItemCard;

const dateColSmWidth = '120px';

const CardBase = styled('div')`
  flex-grow: 1;
  flex-basis: 0;
  float: right;
  background: linear-gradient(90deg, ${palette.yellow}, ${palette.yellow})
    repeat-y;
  background-size: ${dateColSmWidth};

  background-color: ${palette.white};
  color: ${palette.black};

  border-radius: 15px;
  width: 100%;
  max-width: 488px;
  text-align: left;

  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;

  :hover {
    transform: translateY(-10px);
    box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.05);
  }
`;

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
