import * as React from "react"
import { Normalize } from "styled-normalize"
import { ThemeProvider } from "@features/themeprovider"
import { GlobalStyles } from "@ui/globalstyles"
import { BrowserRouter, Redirect } from "react-router-dom"
import { Routes } from "./routes"

export const App = () => {
  return (
    <ThemeProvider>
      <Normalize />
      <GlobalStyles />
      <BrowserRouter>
        <Redirect to="/currencies" />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
