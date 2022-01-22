import React from "react";
import styled from "styled-components";

import config from "../theme/config";
const { color } = config;

const StyledIcon = styled.a`
  font-size: 1.5em;
  color: ${color.text};
  display: flex;
  align-items: center;

  transition: all 0.1s ease;

  &:hover {
    color: ${color.accent};
    cursor: pointer;
  }
`;

const VisuallyHidden = styled.div`
  display: inline-block;
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1em;
  width: 1em;
`;

const SocialIcon = ({ href, icon, iconName, className }) => {
  return (
    <StyledIcon href={href} className={className} target="_blank" rel="noreferrer">
      {icon}
      <VisuallyHidden>{iconName ? iconName : "Unknown Social Media Icon"}</VisuallyHidden>
    </StyledIcon>
  );
};

export default SocialIcon;
