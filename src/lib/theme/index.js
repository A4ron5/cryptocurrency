import { createEvent, createStore } from "effector"

const themes = ["light", "dark"]

export const themeToggled = createEvent()

export const $selectedTheme = createStore(activateTheme())

$selectedTheme.on(themeToggled, (state) =>
  state === "light" ? "dark" : "light",
)

// $selectedTheme.watch(saveTheme)

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

// function saveTheme(theme) {
//   localStorage.setItem("theme", theme)
//   const switched = theme === "dark"
//   localStorage.setItem("switched", switched)
// }
