import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import usePortal from "react-useportal";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/ibm-plex-mono/600.css";

import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import Footer from "./Footer";
import SEO from "./SEO";

import GlobalStyle from "../theme/globalStyles";
import config from "../theme/config";
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

// Workaround for triggering the modal through a useEffect, instead of some kind of event.
const NULL_EVENT = { currentTarget: { contains: () => false } };

const Layout = ({ title, description, children }) => {
  const { openPortal, closePortal, isOpen, Portal } = usePortal({ closeOnOutsideClick: false });

  useEffect(() => {
    // Can be used to run code after a set period of time.
    // Works even if you load up home page and then switch to a different page, which is nice.
    const modalTimer = setTimeout(() => {
      console.log("This timer was completed after 3 seconds.");
      openPortal(NULL_EVENT);
    }, 1000);

    return clearTimeout(modalTimer);
  }, []);

  return (
    <StyledSite>
      <GlobalStyle />
      <SEO title={title} description={description} />
      <Navbar />
      {isOpen && (
        <Portal>
          <Modal closePortal={closePortal} />
        </Portal>
      )}
      <StyledContent>{children}</StyledContent>
      <Footer />
    </StyledSite>
  );
};

export default Layout;

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};
