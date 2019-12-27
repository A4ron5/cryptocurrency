import React from "react"
import styled from "styled-components"

export const NotFoundPage = () => (
  <NotFoundContainer>Page not found</NotFoundContainer>
)

const NotFoundContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  font-size: 4rem;
`
