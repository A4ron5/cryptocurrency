import React from "react"
import { useList } from "effector-react"
import { CommonTemplate } from "@features/common/index"
import { Container, GridContainer } from "@ui/templates"
import { Authenticated } from "@features/common/authenticated"
import { Currency } from "@ui/molecules/card"
import { $sampled } from "./model"

export const FeaturedPage = () => {
  const list = useList($sampled, (item) => (
    <Currency
      logo={item.logo_url}
      name={item.name}
      price={item.price}
      rank={item.rank}
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
