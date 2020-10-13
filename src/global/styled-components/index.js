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

export {
  Link,
}