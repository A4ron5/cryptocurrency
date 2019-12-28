import React from "react"
import styled from "styled-components"
import { useStore } from "effector-react"
import { ThemeToggler } from "@features/themetoggler"
import { Container } from "@ui/templates"
import { history } from "@lib/routing"
import { Button } from "./atoms/button"
import { $isAuth, checkedAuth } from "./model"

export const Header = () => {
  const auth = useStore($isAuth)

  const handleClick = () => checkedAuth()

  const toMain = () => history.push("/currencies")
  const toFeatured = () => history.push("/featured")
  const toAbout = () => history.push("/about")

  return (
    <Container>
      <Wrapper>
        <Button onClick={toMain}>Main</Button>
        <Button onClick={toFeatured}>Featured</Button>
        <Button onClick={toAbout}>About</Button>
        <ThemeToggler />
        <Button onClick={handleClick}>{auth ? "Logout" : "Login"}</Button>
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
