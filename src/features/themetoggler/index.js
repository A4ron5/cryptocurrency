import React from "react"
import { Toggler } from "@ui/atoms"
import { themeToggled } from "@lib/theme"
import { useStore } from "effector-react"
import { $toggledButton } from "./model"

export const ThemeToggler = () => {
  const checked = useStore($toggledButton)

  const switchedTheme = () => {
    themeToggled()
  }

  return <Toggler handleClick={switchedTheme} checked={checked} />
}
