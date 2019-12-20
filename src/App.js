/* eslint-disable import/no-unresolved */
import * as React from "react"
import { Example } from "@features/box"
import { Normalize } from "styled-normalize"
import { ThemeProvider } from "@features/themeprovider"
import { GlobalStyles } from "./ui/globalstyles"

export const App = () => {
  return (
    <ThemeProvider>
      <Normalize />
      <GlobalStyles />
      <Example />
    </ThemeProvider>
  )
}
