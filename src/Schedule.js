import React from 'react';

import { Planet } from './Planet.js';
import { Section } from './Section.js';
import styled from '@emotion/styled';

import SchedulePlanet from './img/schedule-planet.svg';

export const Schedule = () => {

  const scheduleItems = [];
  scheduleData.forEach((item) => {
      scheduleItems.push(
       <Row>
        <p>{item[0]}</p>
        <p>{item[1]}</p>
       </Row>
      )
  });
  
  return (
    <>
      <Planet src={SchedulePlanet} />
      <Section title="Schedule">
        <Table>
          {scheduleItems}
        </Table>
      </Section>
    </>
  )
};

const Table = styled.div`
  margin: 0 auto;
  width: 30rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0rem;
`;

const scheduleData = [
  ['BREAKFAST', '10:00 IN THE ATRIUM'],
  ['LAUNCH IDEAS', '11:00-12:00 IN THE ATRIUM'],
  ['WORKSHOP', '1:00-3:00 IN THE ATRIUM'],
  ['SPEAKER ONE', '3:00-2:00 IN THE ATRIUM'],
  ['SPEAKER TWO', '4:00-5:30 IN THE ATRIUM'],
  ['WORKSHOP: SOMETHING', '4:00-5:30 IN THE ATRIUM'],
  ['LUNCH', '6:00-7:00 IN THE ATRIUM'],
  ['IDEATION WORKSHOP', '8:00-2:00 IN THE ATRIUM'],
  ['GET FREE STUFF YAY', '3:00-2:00 IN THE ATRIUM'],
  ['DESIGN WOOHOO', '4:00-5:30 IN THE ATRIUM'],
  ['YAY I LOVE IDEATE', '4:00-5:30 IN THE ATRIUM']
];