import React from "react"
import styled from "styled-components"
import { ThemeToggler } from "@features/themetoggler"
import { CommonTemplate } from "@ui/templates"

const Header = () => (
  <>
    <Login>Login</Login>
    <ThemeToggler />
  </>
)

export const HomePage = () => {
  return <CommonTemplate header={<Header />}>Content</CommonTemplate>
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
