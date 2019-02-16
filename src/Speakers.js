import React from 'react';
import styled from '@emotion/styled';

import { Planet } from './Planet.js';
import { Section } from './Section.js';

import SpeakersPlanet from './img/speakers-planet.svg';

export const Speakers = () => (
  <>
    <Planet src={SpeakersPlanet} />
    <Section title="Speakers">
      <p>
        To explore a wide variety of possible solutions through generating a
        large quantity of diverse possible solutions, allowing you to step
        beyond the obvious and explore a range of ideas.
      </p>
    </Section>
  </>
);
