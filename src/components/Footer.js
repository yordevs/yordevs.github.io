import React from "react";
import styled from "styled-components";
import { FaTwitter, FaInstagram, FaSlack, FaFacebookF } from "react-icons/fa";

import config from "../theme/config";
const { color } = config;

const FooterHolder = styled.div`
  margin-top: 5px;
  width: 100%;
  min-height: 50px;
`;

const SocialLogoHolder = styled.div`
  display: flex;
  justify-content: flex-end;
  float: right;
`;

const StyledFacebook = styled(FaFacebookF)`
  margin: 5px;
  font-size: 2.3em;
  color: ${color.text};

  &:hover {
    color: ${color.accent};
  }
`;

const StyledTwitter = styled(FaTwitter)`
  margin: 5px;
  font-size: 2.3em;
  color: ${color.text};

  &:hover {
    color: ${color.accent};
  }
`;

const StyledInstagram = styled(FaInstagram)`
  margin: 5px;
  font-size: 2.3em;
  color: ${color.text};

  &:hover {
    color: ${color.accent};
  }
`;

const StyledSlack = styled(FaSlack)`
  margin: 5px;
  font-size: 2.3em;
  color: ${color.text};

  &:hover {
    color: ${color.accent};
  }
`;

const Footer = () => {
  return (
    <FooterHolder>
      <p style={{ float: "left", "margin-top": "25px" }}>
        © {new Date().getFullYear()} York Community Web and App Development
      </p>
      <SocialLogoHolder>
        <a href="https://facebook.com/yordevs" target="_blank" rel="noreferrer">
          <StyledFacebook />
        </a>
        <a href="https://twitter.com/yordevs" target="_blank" rel="noreferrer">
          <StyledTwitter />
        </a>
        <a href="https://instagram.com/yordevs" target="_blank" rel="noreferrer">
          <StyledInstagram />
        </a>
        <a href="https://yordevs.slack.com" target="_blank" rel="noreferrer">
          <StyledSlack />
        </a>
      </SocialLogoHolder>
    </FooterHolder>
  );
};

export default Footer;
