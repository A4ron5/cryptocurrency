import React from "react"
import { useList } from "effector-react"
import { CommonTemplate } from "@features/common/index"
import { Container, GridContainer } from "@ui/templates"
import { Authenticated } from "@features/common/authenticated"
import { Currency } from "@ui/molecules/card"
import { $combined } from "./model"

export const FeaturedPage = () => {
  const list = useList($combined, (item) => (
    <Currency
      logo={item.image}
      name={item.name}
      price={item.current_price}
      rank={item.market_cap_rank}
    />
  ))

  return (
    <Authenticated>
      <CommonTemplate>
        <Container>
          <GridContainer>{list}</GridContainer>
        </Container>
      </CommonTemplate>
    </Authenticated>
  )
}
