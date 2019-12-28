import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Container = styled.div`
  margin-left: auto;
`

const Checkbox = styled.input.attrs({
  type: "checkbox",
  id: "switch",
})`
  height: 0;
  width: 0;
  display: none;
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
  width: 52px;
  height: 30px;
  background: #fff;
  display: block;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 20px;
    height: 20px;
    background: #e5e5e5;
    transition: 0.3s;
  }
`
export const Toggler = ({ handleClick, checked }) => {
  return (
    <Container title="Click for change theme">
      <Checkbox defaultChecked={checked} />
      <Label onClick={handleClick} />
    </Container>
  )
}

Toggler.propTypes = {
  handleClick: PropTypes.func.isRequired,
  checked: PropTypes.string.isRequired,
}
