import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import config from "../theme/config";
const { color, font } = config;

import { hexToRGBA } from "../theme/util";

const StyledButton = styled(({ as }) => as)`
  text-decoration: none;
  display: inline-block;
  background-color: ${({ variant }) => (variant === "primary" ? color.accent : color.background)};
  color: ${(props) => (props.variant === "primary" ? color.background : color.accent)};

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
    background-color: ${({ variant }) =>
      // eslint-disable-next-line indent
      variant === "primary" ? color.background : hexToRGBA(color.accent, 0.3)};
    color: ${color.accent};
  }
`;

const Button = ({ to, href, children, variant }) => (
  <StyledButton as={to ? Link : "a"} to={to} href={href} variant={variant}>
    {children}
  </StyledButton>
);

export default Button;
