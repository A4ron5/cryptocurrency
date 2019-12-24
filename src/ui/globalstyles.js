import { createGlobalStyle } from "styled-components"
import { dark } from "./themes/dark"
import { light } from "./themes/light"

export const GlobalStyles = createGlobalStyle`

  [data-theme="light"] {
    ${light}
  }

  [data-theme="dark"] {
    ${dark}
  }

  body {
    background: var(--surface);
    color: var(--primary-text);
    font-family: "Times New Roman";
    font-size: 14px;
    box-sizing: border-box;
  }
`
