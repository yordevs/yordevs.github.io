import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/ibm-plex-mono/600.css";

import Navbar from "../components/Navbar";

import GlobalStyle from "../theme/globalStyles";
import Footer from "./Footer";

import config from "../theme/config";
import SEO from "./SEO";
const { breakpoint } = config;

const StyledSite = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const StyledContent = styled.main`
  flex: 1;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  padding: 1em;

  @media (${breakpoint.lg}) {
    padding: 1em 0;
  }
`;

const Layout = ({ title, description, children }) => (
  <StyledSite>
    <GlobalStyle />
    <SEO title={title} description={description} />
    <Navbar />
    <StyledContent>{children}</StyledContent>
    <Footer />
  </StyledSite>
);

export default Layout;

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};
