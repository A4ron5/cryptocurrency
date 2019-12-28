import React from "react"
import PropTypes from "prop-types"
import { Header } from "./header"
import { Footer } from "./footer"

export const CommonTemplate = ({ children, header, footer }) => (
  <>
    {header && <Header>{header}</Header>}
    {children}
    {footer && <Footer>{footer}</Footer>}
  </>
)

CommonTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.element,
  footer: PropTypes.node,
}

CommonTemplate.defaultProps = {
  header: null,
  footer: null,
}
