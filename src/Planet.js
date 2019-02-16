import React from 'react';
import styled from '@emotion/styled';

import OrbitArc from './img/orbit-arc-wide.svg';

const PlanetWrapper = styled.div`
  position: relative;
  display: flex;
  transform: translateY(50%);
  margin-top: 60px;
`;

const Orbit = styled.div`
  position: absolute;
  width: 100%;
  height: 184px;
  top: -179px;
  background-position: center;
  background-image: url(${OrbitArc});
  background-repeat: no-repeat;
`;

const PlanetImage = styled.img`
  margin: auto;
  transform: translateY(-50%);
`;

export const Planet = ({ src }) => (
  <PlanetWrapper>
    <Orbit />
    <PlanetImage src={src} aria-hidden="true" />
  </PlanetWrapper>
);
