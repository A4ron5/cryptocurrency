import React from "react"
import { CommonTemplate } from "@features/common/index"
import { Container } from "@ui/templates"
import { Authenticated } from "@features/common/authenticated"

export const AboutPage = () => (
  <Authenticated>
    <CommonTemplate>
      <Container>
        <div>Currency page, 2020 ©me</div>
      </Container>
    </CommonTemplate>
  </Authenticated>
)
