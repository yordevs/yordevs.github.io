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

const SocialIcon = ({ href, icon, className }) => {
  return (
    <StyledIcon href={href} className={className} target="_blank" rel="noreferrer">
      {icon}
    </StyledIcon>
  );
};

export default SocialIcon;
