import styled from 'styled-components';

const Link = styled.a`
  width: fit-content;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #1e86ff;
  font-weight: bold;
  text-decoration: none;

  &:active > button {
    position: relative;
    top: 1px;
  }
`;

const Button = styled.button`
  height: fit-content;
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border: 0;
  border-radius: 0.5rem;
  text-decoration: none;
`;

const Icon = styled.span`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  ${props => props.color ? `color: ${props.color};` : ''}

  & > svg {
    height: 24px;
  }
`;

export {
  Button,
  Icon,
  Link
}