import React from "react"
import { useStore } from "effector-react"
import PropTypes from "prop-types"
import { Message } from "@ui/atoms"

export const Loader = ({ effect, children }) => {
  const pending = useStore(effect.pending)
  return pending ? <Message>LOADING</Message> : children
}

Loader.propTypes = {
  children: PropTypes.node.isRequired,
  effect: PropTypes.bool.isRequired,
}
