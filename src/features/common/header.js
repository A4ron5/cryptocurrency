import React from "react"
import { useStore } from "effector-react"
import { ThemeToggler } from "@features/themetoggler"
import { Login } from "./atoms/login"
import { $isAuth, checkedAuth } from "./model"

export const Header = () => {
  const auth = useStore($isAuth)

  const handleClick = () => checkedAuth()

  return (
    <>
      <Login onClick={handleClick}>{auth ? "Logout" : "Login"}</Login>
      <ThemeToggler />
    </>
  )
}
