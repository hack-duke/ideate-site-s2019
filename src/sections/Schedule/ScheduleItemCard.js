import React, { Component } from 'react';

import styled from 'styled-components';
import palette from 'assets/palette';
import ScheduleRow from './ScheduleRow';

class ScheduleItemCard extends Component {
  state = {
    isOpen: false,
  };

  toggleOpen = () => {
    this.setState((prevState, prevProps) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const events = this.props.events;

    return (
      <CardBase>
        {events.map((info) => (
          <ScheduleRow info={info} />
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
