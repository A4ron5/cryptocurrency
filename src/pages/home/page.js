import React from "react"
import styled from "styled-components"
import { CommonCurrenciesTemplate } from "@features/common"
import { CurrenciesList } from "@features/currencies"

export const HomePage = () => {
  return (
    <CommonCurrenciesTemplate>
      <GridContainer>
        <CurrenciesList />
      </GridContainer>
    </CommonCurrenciesTemplate>
  )
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 256px;
  grid-gap: 10px;
  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
