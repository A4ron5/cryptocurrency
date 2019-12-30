import React from "react"
import { CommonTemplate } from "@features/common/index"
import { Container } from "@ui/templates"
import { Authenticated } from "@features/common/authenticated"

export const FeaturedPage = () => {
  return (
    <Authenticated>
      <CommonTemplate>
        <Container>{}</Container>
      </CommonTemplate>
    </Authenticated>
  )
}
