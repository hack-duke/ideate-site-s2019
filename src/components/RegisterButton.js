import styled from 'styled-components';

const RegisterButton = styled.div`
  background-color: white;
  border-radius: 6px;
  font-size: 16px;
  padding: 12px 43px;
  display: inline-block;
  margin: 0 auto;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;

  :hover {
    transform: translateY(-2px);
    box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.05);
  }
  :active {
    transform: translateY(-2px) scale(0.9);
    opacity: 0.85;
  }
`;

export default RegisterButton;
