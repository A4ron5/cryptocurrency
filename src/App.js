import * as React from "react"
import { ThemeToggler } from "@features/themetoggler"
import { Normalize } from "styled-normalize"
import { ThemeProvider } from "@features/themeprovider"
import { GlobalStyles } from "./ui/globalstyles"

export const App = () => {
  return (
    <ThemeProvider>
      <Normalize />
      <GlobalStyles />
      <ThemeToggler />
    </ThemeProvider>
  )
}
