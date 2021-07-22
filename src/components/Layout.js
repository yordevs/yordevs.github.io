import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import usePortal from "react-useportal";
import createPersistedState from "use-persisted-state";

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

const ONE_HOUR = 1 * 60 * 60 * 1000;

const KONAMI_CODE = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"]

// Workaround for triggering the modal through a useEffect, instead of some kind of event.
const NULL_EVENT = { currentTarget: { contains: () => false } };

const useModalState = createPersistedState("modalClosed");

const Layout = ({ title, description, children }) => {
  const [modalClosed, setModalClosed] = useModalState("");
  const [pressOrder, setPressOrder] = useState([])

  const { openPortal, closePortal, isOpen, Portal } = usePortal({
    closeOnOutsideClick: false,
    onClose() {
      setModalClosed(new Date().getTime());
    },
  });

  const keyDown = (e) => {
    // why is setPressOrder([...pressOrder, e.code]) not working
    let tmp = pressOrder
    if (pressOrder.length < 9) {
      tmp.push(e.code)
    } else if (tmp.length === 9) {
      tmp.push(e.code);
      if (JSON.stringify(KONAMI_CODE) === JSON.stringify(tmp)) {
        alert("JAVASCRIPT GAME JAME 👀  \n @devsoc are you down")
      }
    } else {
      tmp.shift()
      tmp.push(e.code)
      if (JSON.stringify(KONAMI_CODE) === JSON.stringify(tmp)) {
        alert("JAVASCRIPT GAME JAME 👀  \n @devsoc are you down")
      }
    }
    
    setPressOrder(tmp)
  };


  useEffect(() => {
    let modalTimer;

    const closedOneHourAgo = modalClosed + ONE_HOUR <= new Date().getTime();

    if (closedOneHourAgo) {
      // Can be used to run code after a set period of time.
      // Works even if you load up home page and then switch to a different page, which is nice.
      modalTimer = setTimeout(() => {
        openPortal(NULL_EVENT);
      }, 1000);
    }

    document.addEventListener('keydown', keyDown)

    return () => {
      clearTimeout(modalTimer);
      document.removeEventListener("keydown", keyDown);
    };
  }, []);

  return (
    <StyledSite id="styled-site">
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
