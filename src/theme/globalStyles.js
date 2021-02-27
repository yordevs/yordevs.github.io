import { createGlobalStyle } from "styled-components";

import config from "./config";

const { colors, fonts } = config;

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
    font-size: ${fonts.sizes.base};
  }
  /* END OF RESET */

  /* TODO: Add the following things to this file
    - default font-family for all text
    - font sizes for at least p, h1, h2, h3
    - margin & padding for at least p, h1, h2, h3
  */
  body {
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-weight: 300;
  }

  h1 {font-size:2rem}
  h2 {font-size:1.5rem}
  h3 {font-size:1.2rem}

  h1, h2, h3 {
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  p {
    margin-bottom: 0.8rem;
    line-height: 1.3;
  }

  ::selection {
    color: white;
    background: ${colors.accent};
  }
`;

export default GlobalStyle;
