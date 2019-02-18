import styled from '@emotion/styled';
import { BG_COLOR } from './ui.js';

export const Button = styled.a`
  display: inline-block;
  color: ${BG_COLOR};
  background-color: white;
  border: none;
  text-decoration: none;
  font-size: 1.25em;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
  transform-origin: bottom center;
  -webkit-tap-highlight-color: transparent;

  :hover {
    transform: translateY(-2px);
    box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.25);
  }

  :active {
    transform: translateY(-2px) scale(0.9);
    opacity: 0.85;
  }
`;
