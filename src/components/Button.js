/* eslint-disable indent */
import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import config from "../theme/config";
const { color, font } = config;

import { hexToRGBA } from "../theme/util";

const StyledButton = styled(({ as }) => as)`
  text-decoration: none;
  display: inline-block;
  background-color: ${({ primary }) => (primary ? color.accent : color.background)};
  color: ${({ primary }) => (primary ? color.background : color.accent)};

  border: 2px solid ${color.accent};
  border-radius: 25rem;

  font-weight: ${font.weight.semibold};

  padding: 0.3em 2em;
  margin: 0.5em 0;

  width: fit-content;

  transition: all 0.15s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ primary }) =>
      primary ? color.background : hexToRGBA(color.accent, 0.3)};
    color: ${color.accent};
  }
`;

const Button = ({ to, href, children, primary = false }) => (
  <StyledButton as={to ? Link : "a"} to={to} href={href} primary={primary}>
    {children}
  </StyledButton>
);

export default Button;

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
  primary: PropTypes.bool,
};
