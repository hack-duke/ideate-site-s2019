import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import OrbitArc from './img/orbit-arc-wide.svg';

const PlanetWrapper = styled.div`
  position: relative;
  display: flex;
  transform: translateY(50%);
  pointer-events: none;
  margin-top: 20px;
`;

const orbitGraphic = (src, height, strokeWidth) => css`
  position: absolute;
  width: 100%;
  height: ${height}px;
  top: ${-height + strokeWidth / 2}px;
  background-position: center;
  background-image: url(${src});
  background-repeat: no-repeat;
`;

const Orbit = styled.div`
  ${orbitGraphic(OrbitArc, 184, 10)}
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
