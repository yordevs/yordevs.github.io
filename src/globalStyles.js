import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* START OF CSS RESET */
  * {
    margin: 0;
    padding: 0;
    font-size: 1em;
    font-family: inherit;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }
  /* END OF RESET */

  /* TODO: Add the following things to this file
    - default font-family for all text
    - font sizes for at least p, h1, h2, h3
    - margin & padding for at least p, h1, h2, h3
  */
`;

export default GlobalStyle;
