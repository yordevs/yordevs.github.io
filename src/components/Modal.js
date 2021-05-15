import React from "react";
import styled from "styled-components";
import { BiX } from "react-icons/bi";

import TextLink from "./TextLink";

import config from "../theme/config";
const { color } = config;

const Body = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  width: 250px;

  z-index: 3;

  padding: 2em;

  background-color: white;
  border-radius: 10px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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
      <h1>Hello, I&apos;m a modal!</h1>
      <p>
        And here&apos;s a bunch of content I contain. Why don&apos;t you checkout our{" "}
        <TextLink>Competition site</TextLink> while you&apos;re here?
      </p>
    </Body>
  );
};

export default Modal;
