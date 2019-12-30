import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const Link = styled(NavLink).attrs({
  activeStyle: { opacity: "0.7" },
})`
  text-decoration: none;
  color: ${(props) => (props.auth ? "var(--primary-text)" : "var(--surface)")};
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
  &:active {
    color: red;
  }
`
