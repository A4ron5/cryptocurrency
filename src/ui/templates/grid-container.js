import styled from "styled-components"

export const GridContainer = styled.div`
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
