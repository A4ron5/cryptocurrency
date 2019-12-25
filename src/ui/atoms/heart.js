import styled from "styled-components"

export const Heart = styled.div`
  position: relative;
  display: inline-block;
  height: 15px;
  width: 15px;
  top: 0;
  margin: 0 10px;
  background-color: gray;
  transform: rotate(-45deg);
  cursor: pointer;
  &:hover,
  &:hover::after,
  &:hover::before {
    background-color: red;
  }
  &:after,
  &:before {
    content: "";
    background-color: gray;
    border-radius: 50%;
    height: 15px;
    position: absolute;
    width: 15px;
    cursor: pointer;
  }
  &:before {
    top: -10px;
    left: 0;
  }
  &:after {
    left: 10px;
    top: 0;
  }
`
