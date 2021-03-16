import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

import config from "../theme/config";
const { color } = config;

const StyledHeader = styled.div`
  position: absolute;
  width: 100%;
  height: ${({ offset }) => `calc(100% - ${offset}px)`};
  left: 0;
  /* top: 0; */
  margin: -1em 0;
  overflow: hidden;
  z-index: 0;
`;

const IndexHeader = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    setNavbarHeight(document.getElementById("navbar").offsetHeight);
  }, []);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          THREE: THREE,
          mouseControls: false,
          touchControls: false,
          color: color.accent,
          waveHeight: 20,
          shininess: 30,
          waveSpeed: 0.5,
          zoom: 1,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <StyledHeader offset={navbarHeight} ref={myRef}>
      {children}
    </StyledHeader>
  );
};

export default IndexHeader;
