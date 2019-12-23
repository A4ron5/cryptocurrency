import * as React from "react"
import { Normalize } from "styled-normalize"
import { ThemeProvider } from "@features/themeprovider"
import { GlobalStyles } from "@ui/globalstyles"
import { HomePage } from "./pages/home"

export const App = () => {
  return (
    <ThemeProvider>
      <Normalize />
      <GlobalStyles />
      <HomePage />
    </ThemeProvider>
  )
}
