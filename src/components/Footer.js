import React from "react";
import styled from "styled-components";
import {
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import SocialIcon from "../components/SocialIcon";

import config from "../theme/config";
const { color, breakpoint } = config;

const StyledFooter = styled.div`
  margin-top: 1em;
  padding: 2em 1em;

  width: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${color.text};
  color: ${color.background};

  z-index: 1;

  @media (${breakpoint.md}) {
    background-color: ${color.background};
    color: ${color.text};

    padding: 1em;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const SocialLogoHolder = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;

  @media (${breakpoint.md}) {
    justify-content: flex-end;
    width: fit-content;

    & > a {
      margin-left: 1.5em;
    }
  }
`;

const CopyrightInfo = styled.p`
  margin-bottom: 1em;

  text-align: center;

  @media (${breakpoint.md}) {
    margin: 0;
  }
`;

const FooterSocialIcon = styled(SocialIcon)`
  color: ${color.background};

  @media (${breakpoint.md}) {
    color: ${color.text};
  }
`;

const Footer = () => (
  <StyledFooter>
    <CopyrightInfo>
      © {new Date().getFullYear()} York Web and App Development
    </CopyrightInfo>
    <SocialLogoHolder>
      <FooterSocialIcon
        href="https://github.com/yordevs"
        icon={<FaGithub />}
        iconName="Link to Yordevs Github"
      />
      <FooterSocialIcon
        href="https://facebook.com/yordevs"
        icon={<FaFacebookF />}
        iconName="Link to Yordevs Facebook"
      />
      <FooterSocialIcon
        href="https://twitter.com/yordevs"
        icon={<FaTwitter />}
        iconName="Link to Yordevs Twitter"
      />
      <FooterSocialIcon
        href="https://instagram.com/yordevs"
        icon={<FaInstagram />}
        iconName="Link to Yordevs Instagram"
      />
      <FooterSocialIcon
        href="https://discord.gg/j8fbqEP2TD"
        icon={<FaDiscord />}
        iconName="Link to Yordevs Discord"
      />
      <FooterSocialIcon
        href="https://www.linkedin.com/company/yordevs"
        icon={<FaLinkedin iconName="Link to Yordevs LinkedIn" />}
      />
    </SocialLogoHolder>
  </StyledFooter>
);

export default Footer;
