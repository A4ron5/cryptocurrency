import { createEvent, createStore } from "effector"

const themes = ["light", "dark"]

const nextTheme = {
  light: "light",
  dark: "dark",
}

export const themeToggled = createEvent()

export const $selectedTheme = createStore(activateTheme())

$selectedTheme.on(themeToggled, (_, theme) => nextTheme[theme])

$selectedTheme.watch(saveTheme)

function activateTheme() {
  const theme = localStorage.getItem("theme")
  const defaultTheme = themes[0]

  for (let i = 0; i < themes.length; i += 1) {
    if (themes[i] === theme) {
      return themes[i]
    }
  }
  return defaultTheme
}

function saveTheme(theme) {
  localStorage.setItem("theme", theme)
}
