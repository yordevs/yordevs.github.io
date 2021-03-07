import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

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

const Footer = () => {
  return (
    <FooterHolder>
      <p style={{ float: "left", "margin-top": "25px" }}>
        © {new Date().getFullYear()} York Community Web and App Development
      </p>
      <SocialLogoHolder>
        <a href="https://facebook.com/yordevs" target="_blank" rel="noreferrer">
          <StaticImage
            src="../Images/SocialMediaIcons/Facebook.png"
            width={50}
            style={{
              margin: "5px",
            }}
          />
        </a>
        <a href="https://twitter.com/yordevs" target="_blank" rel="noreferrer">
          <StaticImage
            src="../Images/SocialMediaIcons/Twitter.png"
            width={50}
            style={{
              margin: "5px",
            }}
          />
        </a>
        <a href="https://instagram.com/yordevs" target="_blank" rel="noreferrer">
          <StaticImage
            src="../Images/SocialMediaIcons/Insta.png"
            width={50}
            style={{
              margin: "5px",
            }}
          />
        </a>
        <a href="https://yordevs.slack.com" target="_blank" rel="noreferrer">
          <StaticImage
            src="../Images/SocialMediaIcons/Slack.png"
            width={50}
            style={{
              margin: "5px",
            }}
          />
        </a>
      </SocialLogoHolder>
    </FooterHolder>
  );
};

export default Footer;
