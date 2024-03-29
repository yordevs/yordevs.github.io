/* eslint-disable indent */
import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import config from "../theme/config";
const { color, font } = config;

const StyledTextLink = styled(Link)`
  text-decoration: none;
  color: ${color.accent};

  transition: all 0.15s ease;

  font-weight: ${font.weight.semibold};

  border-radius: 2px;

  &:hover,
  &:focus,
  &:active {
    background: ${color.accent};
    color: ${color.background};
  }
`;

const TextLink = ({ to, className, children }) => {
  const isInternal = /^\/(?!\/)/.test(to);

  if (isInternal) {
    return (
      <StyledTextLink to={to} className={className}>
        {children}
      </StyledTextLink>
    );
  }

  return (
    <StyledTextLink
      as="a"
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={className}>
      {children}
    </StyledTextLink>
  );
};

export default TextLink;

TextLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};
