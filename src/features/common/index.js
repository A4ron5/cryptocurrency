import React from "react"
import PropTypes from "prop-types"
import { CommonTemplate } from "@ui/templates"
import { Header } from "./header"

export const CommonCurrenciesTemplate = ({ children }) => {
  return <CommonTemplate header={<Header />}>{children}</CommonTemplate>
}

CommonCurrenciesTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}
