import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";

import config from "../theme/config";
const { color, font, breakpoint, transition } = config;

const StyledNavbar = styled.div`
  padding: 0 1.5em;
  padding-top: 2em;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${color.background};

  z-index: 2;

  @media (${breakpoint.lg}) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 2em 2.5em;
  }
`;

const StyledNav = styled.nav`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;

  @media (${breakpoint.lg}) {
    display: flex;
    flex-direction: row;
  }
`;

const StyledNavBrand = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  margin-right: auto;
  text-decoration: none;
  color: black;
  outline: none;
  transition: all ${transition.standard};

  &:hover {
    color: ${color.accent};
  }

  &::before {
    content: "// ";
    color: ${color.accent};
  }
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: ${color.text};
  margin: 0.5em 0.3em;
  font-weight: ${font.weight.semibold};
  position: relative;
  outline: none;
  z-index: 1;

  &:last-child {
    margin-bottom: 0;
  }

  @media (${breakpoint.lg}) {
    padding: 0.5em 0.8em;

    &:last-child {
      margin-right: 0;
      margin-bottom: auto;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 8px;
      left: 0;
      width: 0%;
      border-bottom: 10px solid ${color.accent};
      transition: all ${transition.standard};
      z-index: -1;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

const StyledNavHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  /* margin-bottom: 1em; */

  @media (${breakpoint.lg}) {
    margin: 0;
    margin-right: auto;
    width: auto;
  }
`;

const StyledMenuToggle = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (${breakpoint.lg}) {
    display: none;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyledNavbar id="navbar">
      <NavHeader toggle={toggle} isOpen={isOpen} />
      <Nav isOpen={isOpen} />
    </StyledNavbar>
  );
};

const Nav = ({ isOpen }) => {
  return (
    <StyledNav isOpen={isOpen}>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/about">About Us</StyledNavLink>
      <StyledNavLink to="/blog">Blog</StyledNavLink>
      <StyledNavLink to="/projects">Our Work</StyledNavLink>
      <StyledNavLink to="/get-involved">Get Involved</StyledNavLink>
      <StyledNavLink to="/contact">Contact Us</StyledNavLink>
    </StyledNav>
  );
};

const MenuToggle = ({ toggle, isOpen }) => (
  <StyledMenuToggle onClick={toggle}>
    {isOpen ? <FiX style={{ fontSize: 24 }} /> : <FiMenu style={{ fontSize: 24 }} />}
  </StyledMenuToggle>
);

const NavHeader = ({ toggle, isOpen }) => (
  <StyledNavHeader>
    <StyledNavBrand to="/">Yordevs</StyledNavBrand>
    <MenuToggle toggle={toggle} isOpen={isOpen} />
  </StyledNavHeader>
);

export default Navbar;
