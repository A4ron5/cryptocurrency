import React from "react"
import styled from "styled-components"
import { CommonCurrenciesTemplate } from "@features/currencies"
import { CurrenciesList } from "@features/currencies/currenciesList"

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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: 256px;
  grid-gap: 10px;
`
