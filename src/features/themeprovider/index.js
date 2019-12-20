import React, { useEffect } from "react"
import { useStore } from "effector-react"
import PropTypes from "prop-types"
import { $selectedTheme } from "@lib/theme"

export const ThemeProvider = ({ children }) => {
  const theme = useStore($selectedTheme)
  useEffect(() => {
    const body = document.querySelector("body")
    if (body) {
      body.dataset.theme = theme
    }
  })

  return <>{children}</>
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
