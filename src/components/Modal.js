import React from "react";
import styled, { keyframes } from "styled-components";
import { BiX } from "react-icons/bi";

import TextLink from "./TextLink";

import config from "../theme/config";
const { color } = config;

const slideIn = keyframes`
  from { 
    transform: translateX(-150%);
  } to { 
    transform: translateX(0);
  }
`;

const Body = styled.div`
  position: fixed;
  top: 25%;
  left: 0;

  width: 300px;

  z-index: 3;

  padding: 2em;

  background-color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${slideIn};
    animation-fill-mode: backwards;
    animation-duration: 300ms;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 13px;

  background: none;
  border: none;
  cursor: pointer;

  transition: color 0.175s ease;

  &:hover {
    color: ${color.accent};
  }
`;

const Modal = ({ closePortal }) => {
  return (
    <Body>
      <CloseButton onClick={closePortal}>
        <BiX size={28} />
      </CloseButton>
      <h1>Hello!</h1>
      <p>Have you heard about our Logo Competition?</p>
      <p>
        We&apos;re giving away a <b>£100 Amazon voucher</b> to whoever designs the best logo for our
        society!
      </p>
      <p>
        ✨ Head over to the{" "}
        <TextLink to="https://competition.yordevs.com/#/">competition site</TextLink> for more
        information ✨
      </p>
    </Body>
  );
};

export default Modal;
