import React from "react"
import { ThemeToggler } from "@features/themetoggler"
import { Login } from "./atoms/login"

export const Header = () => (
  <>
    <Login>Login</Login>
    <ThemeToggler />
  </>
)
