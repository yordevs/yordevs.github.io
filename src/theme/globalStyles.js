import { createGlobalStyle } from "styled-components";

import config from "./config";

const { color, font } = config;

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
    font-size: ${font.size.base};
  }
  /* END OF RESET */

  /* TODO: Add the following things to this file
    - default font-family for all text
    - font sizes for at least p, h1, h2, h3
    - margin & padding for at least p, h1, h2, h3
  */
  body {
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-weight: ${font.weight.normal};
  }

  h1 {font-size:2rem}
  h2 {font-size:1.5rem}
  h3 {font-size:1.2rem}

  h1, h2, h3 {
    margin-bottom: 0.5rem;
    font-weight: ${font.weight.bold};
  }

  p {
    margin-bottom: 0.8rem;
    line-height: 1.3;
    text-align: justify;
    text-justify: inter-word;
  }

  ::selection {
    color: white;
    background: ${color.accent};
  }
`;

export default GlobalStyle;
