import React from 'react';
import styled from '@emotion/styled';

import { Planet } from './Planet.js';
import { Section } from './Section.js';

import FAQsPlanet from './img/faqs-planet.svg';

export const FAQs = () => (
  <>
    <Planet src={FAQsPlanet} />
    <Section title="FAQs">
      <p>
        To explore a wide variety of possible solutions through generating a
        large quantity of diverse possible solutions, allowing you to step
        beyond the obvious and explore a range of ideas.
      </p>
    </Section>
  </>
);
