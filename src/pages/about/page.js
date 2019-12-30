import React from "react"
import { CommonTemplate } from "@features/common/index"
import { Container } from "@ui/templates"
import { Authenticated } from "@features/common/authenticated"

export const AboutPage = () => (
  <Authenticated>
    <CommonTemplate>
      <Container>
        <div>About</div>
      </Container>
    </CommonTemplate>
  </Authenticated>
)
