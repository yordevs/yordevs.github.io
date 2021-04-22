import { css } from "styled-components";

const PrismStyles = css`
  /* ^^^SLIGHTLY HACKY HACK ALERT^^^
    This only styles single-line <code> instead of anything inside a <pre> because <pre> has its
    own styling rules for child <code> blocks.
  */
  .gatsby-highlight {
    border-radius: 5px;
    background-color: #24242e;
  }

  .gatsby-highlight pre[class*="language-"] {
    background-color: transparent;
    padding: 1em;
    margin: 1em 0 2em 0;
  }

  .gatsby-highlight pre[class*="language-"],
  .gatsby-highlight code[class*="language-"] {
    font-family: "IBM Plex Mono", Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console",
      "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono",
      "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
  }

  .gatsby-code-title {
    margin-bottom: -1em;
    padding: 1em;
    font-family: "IBM Plex Mono", Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console",
      "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono",
      "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;

    background-color: #24242e;
    border-bottom: 1px solid #fe8c52aa;
    border-bottom: 1px solid #aaaacaaa;
    color: #aaaaca;
    z-index: 0;

    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    & + .gatsby-highlight {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
`;

export default PrismStyles;
