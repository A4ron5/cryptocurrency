import React from "react"
import PropTypes from "prop-types"
import { Message } from "@ui/atoms"

export const ErrorCatcher = ({ children, error }) => {
  if (error) {
    return <Message>{error}</Message>
  }
  return <>{children}</>
}

ErrorCatcher.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string.isRequired,
}
