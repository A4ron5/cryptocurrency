import React from "react"
import { CommonTemplate } from "@features/common"
import { CurrenciesList } from "@features/currencies"
import { Container, GridContainer } from "@ui/templates"

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
