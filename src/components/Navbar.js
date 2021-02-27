import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import config from "../theme/config";
const { color, font } = config;

const StyledNavbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2em 2.5em;
`;

const StyledNav = styled.nav``;

const StyledNavBrand = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  margin-right: auto;
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  padding: 0.5em 0.8em;
  color: black;
  margin: 0 0.3em;
  font-weight: ${font.weight.semibold};
  position: relative;
  outline: none;

  &:last-child {
    margin-right: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 8px;
    left: 0;
    width: 0%;
    border-bottom: 10px solid ${color.accent};
    transition: all 0.15s ease-in-out;
    mix-blend-mode: screen;
    z-index: -1;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Navbar = () => (
  <StyledNavbar>
    <StyledNavBrand>Yordevs</StyledNavBrand>
    <StyledNav>
      <StyledNavLink to="/home">Home</StyledNavLink>
      <StyledNavLink to="/about">About Us</StyledNavLink>
      <StyledNavLink to="/projects">Our Work</StyledNavLink>
      <StyledNavLink to="/team">Meet the team</StyledNavLink>
      <StyledNavLink to="/get-involved">Get Involved</StyledNavLink>
      <StyledNavLink to="/contact">Contact Us</StyledNavLink>
    </StyledNav>
  </StyledNavbar>
);

export default Navbar;
