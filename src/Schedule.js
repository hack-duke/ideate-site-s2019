import React from 'react';
import Media from 'react-media';

import { Planet } from './Planet.js';
import { Section, bodyTextStyle, shadowBg } from './Section.js';
import styled from '@emotion/styled';

import SchedulePlanet from './img/schedule-planet.svg';

const scheduleData = [
  ['CHECK-IN', '10:00AM', '12:00PM', 'MAIN LOBBY'],
  ['KEYNOTE SPEECH', '11:00AM', '12:00PM', 'AHMADIEH FAMILY AUDITORIUM'],
  ['WORKSHOP SESSION 1', '12:00PM', '1:00PM', 'GROSS HALL 104, 105, 270'],
  ['LUNCH', '1:00PM', '2:00PM', 'MAIN LOBBY, GROSS HALL 230 & 250'],
  ['WORKSHOP SESSION 2', '2:00PM', '3:00PM', 'GROSS HALL 104, 105, 270'],
  ['DESIGN CHALLENGE', '3:00PM', '5:00PM', 'GROSS HALL'],
  ['CLOSING SPEECH', '5:00PM', '6:00PM', 'AHMADIEH FAMILY AUDITORIUM'],
];

export const Schedule = () => {
  const scheduleDesktopItems = (
    <DesktopTable>
      {scheduleData.map(([event, start, end, location], i) => (
        <React.Fragment key={i}>
          <DesktopEvent>{event}</DesktopEvent>
          <DesktopTimeLocation>
            {start}-{end} @ {location}
          </DesktopTimeLocation>
        </React.Fragment>
      ))}
    </DesktopTable>
  );

  const scheduleMobileItems = (
    <MobileTable>
      {scheduleData.map(([event, start, end, location], i) => (
        <React.Fragment key={i}>
          <MobileTime>{start}</MobileTime>
          <div>
            <MobileLocation>{location}</MobileLocation>
            <MobileEvent>{event}</MobileEvent>
          </div>
        </React.Fragment>
      ))}
    </MobileTable>
  );

  return (
    <>
      <Planet src={SchedulePlanet} />
      <Section title="Schedule">
        <Media query={{ minWidth: 500 }}>
          {matches => (matches ? scheduleDesktopItems : scheduleMobileItems)}
        </Media>
      </Section>
    </>
  );
};

const DesktopTable = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  grid-gap: 1em;
  margin: 0 auto;
  max-width: 700px;
`;

const DesktopEvent = styled.span`
  font-weight: 600;
  ${shadowBg};
`;

const DesktopTimeLocation = styled.span`
  text-align: left;
  ${bodyTextStyle}
  ${shadowBg};
`;

const MobileTable = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  grid-gap: 1.5em;
`;

const MobileTime = styled.span`
  font-size: 1.75em;
  ${bodyTextStyle}
  ${shadowBg};
`;

const MobileLocation = styled.span`
  ${shadowBg};
`;

const MobileEvent = styled.div`
  font-weight: 600;
  font-size: 1.333em;
  ${shadowBg};
`;
