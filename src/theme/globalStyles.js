import { createGlobalStyle } from "styled-components";

import PrismStyles from "./PrismStyles";

import config from "./config";
const { color, font, transition } = config;

import { hexToRGBA } from "./util";

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
    background-color: ${color.background};
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-weight: ${font.weight.normal};
    color: ${color.text};
    overflow-y: scroll;
  }

  h1 {font-size:2rem}
  h2 {font-size:1.5rem}
  h3 {font-size:1.2rem}

  h1, h2, h3 {
    color: ${color.heading};
    margin-bottom: 0.5rem;
    font-weight: ${font.weight.bold};
  }

  p {
    margin-bottom: 0.8rem;
    line-height: 1.4;
    text-align: left;
  }

  ::selection {
    color: white;
    background: ${color.accent};
  }

  
  a {
    color: ${color.accent};
    font-weight: ${font.weight.semibold};

    text-decoration: none;

    transition: all ${transition.standard};

    &:hover {
      color: ${color.text};
    }
  }

  hr {
    border: none;
    border-top: 1px solid ${color.accent};
    margin: 1em 0;
  }

  ul,
  ol {
    margin-bottom: 1em;
    padding-left: 1em;
  }

  :not(pre) > code {
    color: ${color.accent};
    font-weight: ${font.weight.semibold};
    font-family: "IBM Plex Mono", Courier, monospace;
    background: ${hexToRGBA(color.accent, 0.15)};
    padding: 0.1em 0.3em;
    border-radius: 5px;
  }

  blockquote {
    background-color: ${hexToRGBA(color.accent, 0.15)};
    padding: 1em;
    border-left: 3px solid ${color.accent};
    margin: 1em 0;

    p {
      color: ${color.accent};
    }

    p:last-child {
      margin-bottom: 0;
    }
  }

  section {
    margin-bottom: 1em;
  }

  ${PrismStyles}
`;

export default GlobalStyle;
