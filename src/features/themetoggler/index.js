import React from "react"
import { Toggler } from "@ui/atoms/toggler"
import { themeToggled } from "@lib/theme"

export const ThemeToggler = () => {
  const switchedTheme = () => {
    themeToggled()
  }

  return <Toggler handleClick={switchedTheme} />
}
