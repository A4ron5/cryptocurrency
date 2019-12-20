import * as React from "react"
import styled from "styled-components"

const Box = styled.div`
  width: 200px;
  height: 100px;
  margin: 0 auto;
  margin-top: 100px;
  background: var(--primary);
`

export const Example = () => {
  return <Box />
}
