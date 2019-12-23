import React from "react"
import PropTypes from "prop-types"
import { Header } from "./header"
import { Container } from "./container"
import { Footer } from "./footer"

export const CommonTemplate = ({ children, header, footer }) => (
  <Container>
    {header && <Header>{header}</Header>}
    {children}
    {footer && <Footer>{footer}</Footer>}
  </Container>
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
