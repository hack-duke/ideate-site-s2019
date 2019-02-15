import React from 'react';
import styled from '@emotion/styled';

import OrbitArc from './img/orbit-arc.svg';

const PlanetWrapper = styled.div`
  position: relative;
  display: flex;
  transform: translateY(50%);
`;

const Orbit = styled.div`
  position: absolute;
  width: 100%;
  height: 771px;
  top: -771px;
  background-position: center;
  background-image: url(${OrbitArc});
`;

const PlanetImage = styled.img`
  margin: 0 auto;
  transform: translateY(-50%);
`;

export const Planet = ({ src }) => (
  <PlanetWrapper>
    <Orbit />
    <PlanetImage src={src} aria-hidden="true" />
  </PlanetWrapper>
);
