import React from "react"
import styled from "styled-components"
import { useStore } from "effector-react"
import { ThemeToggler } from "@features/themetoggler"
import { Container } from "@ui/templates"
import { Button, Link } from "./atoms"
import { $isAuth, checkedAuth } from "./model"

export const Header = () => {
  const auth = useStore($isAuth)

  const handleClick = () => checkedAuth()

  return (
    <Container>
      <Wrapper>
        <Link to="/currencies">Main</Link>
        <Link to="/featured">Featured</Link>
        <Link to="/about">About</Link>
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
