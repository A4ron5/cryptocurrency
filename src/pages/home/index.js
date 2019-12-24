import React from "react"
import styled from "styled-components"
import { ThemeToggler } from "@features/themetoggler"
import { CommonTemplate } from "@ui/templates"
import { Currency } from "@ui/molecules/card"

const Header = () => (
  <>
    <Login>Login</Login>
    <ThemeToggler />
  </>
)

export const HomePage = () => {
  return (
    <CommonTemplate header={<Header />}>
      <GridContainer>
        <Currency />
        <Currency />
        <Currency />
        <Currency />
      </GridContainer>
    </CommonTemplate>
  )
}

const Login = styled.span`
  color: var(--primary-text);
  font-weight: bold;
  text-transform: uppercase;
  background: var(--primary);
  border-radius: 15px;
  padding: 7px 10px;
  margin-left: 10px;
`
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`
