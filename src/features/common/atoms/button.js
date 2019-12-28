import styled from "styled-components"

export const Button = styled.span`
  color: var(--primary-text);
  font-weight: bold;
  text-transform: uppercase;
  background: var(--primary);
  padding: 7px 10px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  &:first-of-type {
    margin-left: 0;
  }
`
