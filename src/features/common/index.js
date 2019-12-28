import React from "react"
import PropTypes from "prop-types"
import { CommonTemplate as Template } from "@ui/templates"
import { Header } from "./header"

export const CommonTemplate = ({ children }) => {
  return <Template header={<Header />}>{children}</Template>
}

CommonTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}
