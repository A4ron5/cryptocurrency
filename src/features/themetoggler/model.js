import { createStore } from "effector-logger"
import { themeToggled } from "@lib/theme"

export const $toggledButton = createStore(restoreButton())

$toggledButton.on(themeToggled, (state) => state)

function restoreButton() {
  const button = localStorage.getItem("button")
  return button
}
