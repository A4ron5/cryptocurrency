import React from "react"
import PropTypes from "prop-types"
import { useStore } from "effector-react"
import { Redirect } from "react-router-dom"
import { $isAuth } from "./model"

export const Authenticated = ({ children }) => {
  const auth = useStore($isAuth)

  return auth ? <>{children}</> : <Redirect to="/currencies" />
}

Authenticated.propTypes = {
  children: PropTypes.node.isRequired,
}
