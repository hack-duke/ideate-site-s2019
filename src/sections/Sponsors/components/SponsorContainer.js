import React from 'react';
import styled from 'styled-components';
import linodeImg from './linode.svg';
import tastyImg from './tastytrade.svg';
import colabImg from './co-lab.svg';
import eceImg from './ece.svg';
import memsImg from './mems.svg';

const SponsorContainer = () => {
  return (
    <Container>
      <a
        href="https://www.linode.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon src={linodeImg} style={{height: 65}}/>
      </a>
      <a
        href="https://www.tastytrade.com/tt/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon src={tastyImg} style={{height: 82}}/>
      </a>
      <a
        href="https://colab.duke.edu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon src={colabImg} style={{height: 110}}/>
      </a>
      <a
        href="https://ece.duke.edu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon src={eceImg} style={{height: 40}}/>
      </a>
      <a
        href="https://mems.duke.edu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon src={memsImg} style={{height: 40}}/>
      </a>
    </Container>
  );
};

export default SponsorContainer;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  margin: auto;
`;

const Icon = styled.img`
  margin-right: 40px;
  margin-top: 50px;
  transition: transform 0.2s;

  :hover {
    transform: translateY(-2px);
    opacity: 85%;
  }
`;
