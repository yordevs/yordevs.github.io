import React from "react";
import styled from "styled-components";

const HiddenStyled = styled.div`
  display: inline-block;
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1em;
  width: 1em;
  margin: -1em;
`;

const VisuallyHidden = ({ children }) => {
  return <HiddenStyled>{children}</HiddenStyled>;
};

export default VisuallyHidden;
