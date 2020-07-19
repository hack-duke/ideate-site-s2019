import React from 'react';
import Section from 'components/Section';
import { MainHeader } from 'components/typography';

import ScheduleItemCard from './ScheduleItemCard';
import scheduleInfo from './scheduleInfo';

import palette from 'assets/palette';
import styled from 'styled-components';


export default class Schedule extends React.Component {
  render() {
    const saturday = scheduleInfo[0];
    const sunday = scheduleInfo[1];

    return (
      <Section sectionColor={palette.red} sectionId="schedule">
        <MainHeader style={{ color: palette.white }}>SCHEDULE</MainHeader>
          <ScheduleContainer>
            <Day>
              <DateHeader>Saturday July 25</DateHeader>
              <ScheduleItemCard events={saturday.events}/>
            </Day>

            <Day>
              <DateHeader>Sunday July 26</DateHeader>
              <ScheduleItemCard events={sunday.events}/>
            </Day>
          </ScheduleContainer>
      </Section>
    );
  }
}

const ScheduleContainer = styled('div')`
  width: 1100px;
  margin: 75px auto;
  text-align: center;

  display: flex;
  justify-content: space-around;
`;

const Day = styled('div')`
  display: flex;
  flex-direction: column;
`;
const DateHeader = styled('div')`
  color: white;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 32px;
`;
