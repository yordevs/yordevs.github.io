/* eslint-disable indent */
import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import config from "../theme/config";
const { color, font } = config;

const StyledTextLink = styled(({ as }) => as)`
  text-decoration: none;
  color: ${color.accent};

  transition: all 0.15s ease-in-out;

  font-weight: ${font.weight.semibold};

  &:hover,
  &:focus,
  &:active {
    background: ${color.accent};
    color: ${color.background};
  }
`;

const TextLink = ({ to, href, children }) => (
  <StyledTextLink
    as={to ? Link : "a"}
    to={to}
    href={href}
    target={href ? "_blank" : null}
    rel={href ? "noopener" : null}>
    {children}
  </StyledTextLink>
);

export default TextLink;

TextLink.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
};
