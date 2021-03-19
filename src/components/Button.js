/* eslint-disable indent */
import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import config from "../theme/config";

const { color, font, transition, breakpoint } = config;

const StyledButton = styled(Link)`
  display: inline-block;

  text-decoration: none;
  text-align: center;
  font-weight: ${font.weight.semibold};

  background-color: ${({ primary }) => (primary ? color.accent : color.background)};
  color: ${({ primary }) => (primary ? color.background : color.accent)};
  text-align: center;

  border: 2px solid ${color.accent};
  border-radius: 25rem;

  padding: 0.3em 2em;
  margin: 0.5em 0;

  width: 100%;

  @media (${breakpoint.md}) {
    width: fit-content;
  }

  transition: all ${transition.standard};

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ primary }) => (primary ? color.background : color.accent)};
    color: ${({ primary }) => (primary ? color.accent : color.background)};
  }

  @media (${breakpoint.md}) {
    width: fit-content;
  }
`;

const Button = ({ to, children, className, primary = false }) => {
  const isInternal = /^\/(?!\/)/.test(to);

  if (isInternal) {
    return (
      <StyledButton to={to} className={className} primary={primary}>
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton
      as="a"
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      primary={primary}>
      {children}
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  primary: PropTypes.bool,
};
