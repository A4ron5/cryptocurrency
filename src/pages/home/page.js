import React from "react"
import styled from "styled-components"
import { CommonTemplate } from "@features/common"
import { CurrenciesList } from "@features/currencies"
import { Container } from "@ui/templates"

export const HomePage = () => {
  return (
    <CommonTemplate>
      <Container>
        <GridContainer>
          <CurrenciesList />
        </GridContainer>
      </Container>
    </CommonTemplate>
  )
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 256px;
  grid-gap: 10px;
  @media (max-width: 1340px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 200px;
  }
  @media (max-width: 870px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 200px;
  }
`
