import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Container = styled.div``

const Checkbox = styled.input.attrs({
  type: "checkbox",
  id: "switch",
})`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + label {
    background: #121212;
  }
  &:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }
`

const Label = styled.label.attrs({
  htmlFor: "switch",
})`
  cursor: pointer;
  text-indent: -9999px;
  width: 65px;
  height: 35px;
  background: #fff;
  display: block;
  border-radius: 100px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 25px;
    height: 25px;
    background: #e5e5e5;
    border-radius: 25px;
    transition: 0.3s;
  }
`
export const Toggler = ({ handleClick }) => {
  return (
    <Container>
      <Checkbox />
      <Label onClick={handleClick} />
    </Container>
  )
}

Toggler.propTypes = {
  handleClick: PropTypes.func.isRequired,
}
