import React from 'react';
import MediaQuery from 'react-responsive';

import { Planet } from './Planet.js';
import { Section } from './Section.js';
import styled from '@emotion/styled';

import SchedulePlanet from './img/schedule-planet.svg';

const scheduleData = [
  ['BREAKFAST', '10:00', '12:00', 'ATRIUM'],
  ['LAUNCH IDEAS', '11:00', '12:00', 'ATRIUM'],
  ['WORKSHOP', '1:00', '3:00', 'ATRIUM'],
  ['SPEAKER ONE', '3:00', '2:00', 'ATRIUM'],
  ['SPEAKER TWO', '4:00', '5:30', 'ATRIUM'],
  ['WORKSHOP: SOMETHING', '4:00', '5:30', 'ATRIUM'],
  ['LUNCH', '6:00', '7:00', 'ATRIUM'],
  ['IDEATION WORKSHOP', '8:00', '2:00', 'ATRIUM'],
  ['GET FREE STUFF YAY', '3:00', '2:00', 'ATRIUM'],
  ['DESIGN WOOHOO', '4:00', '5:30', 'ATRIUM'],
  ['YAY I LOVE IDEATE', '4:00', '5:30', 'ATRIUM']
];

export const Schedule = () => {
  const scheduleDesktopItems = scheduleData.map(
    ([event, start, end, location], i) => (
      <DesktopRow key={i}>
        <p>{event}</p>
        <p>
          {start}-{end} IN THE {location}
        </p>
      </DesktopRow>
    )
  );

  const scheduleMobileItems = scheduleData.map(
    ([event, start, end, location], i) => (
      <MobileRow key={i}>
        <MobileTime>{start}</MobileTime>
        <TimeLocation>
          <MobileLocation>{location}</MobileLocation>
          <MobileEvent>{event}</MobileEvent>
        </TimeLocation>
      </MobileRow>
    )
  );

  console.log(scheduleDesktopItems.length);
  console.log(scheduleMobileItems.length);

  return (
    <>
      <Planet src={SchedulePlanet} />
      <Section title="Schedule">
        <MediaQuery minWidth={600}>
          {matches => (
            <Table>
              {matches ? scheduleDesktopItems : scheduleMobileItems}
            </Table>
          )}
        </MediaQuery>
      </Section>
    </>
  );
};

const Table = styled.div`
  margin: 0 auto;
  width: 30rem;

  @media screen and (max-width: 600px) {
    width: 17.5rem;
  }
`;

const DesktopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0rem;
`;

const MobileRow = styled.div`
  display: flex;
  margin: 2rem 0rem;
  align-items: center;
`;

const MobileTime = styled.p`
  font-size: 2em;
  basis: 20rem;
  margin-right: 2rem;
`;

const MobileLocation = styled.p`
  font-size: 1rem;
`;

const MobileEvent = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
`;

const TimeLocation = styled.div`
  text-align: left;
`;
