import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import TextLink from "../components/TextLink";
import Committee from "../components/sections/Committee";
import ProjectLeaders from "../components/sections/ProjectLeaders";

import config from "../theme/config";
const { color, font } = config;

const Tagline = styled.h2`
  font-weight: ${font.weight.normal};
`;

const Sponsors = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 1;
  position: relative;

  h2 {
    color: ${color.accent};
    text-transform: uppercase;
    font-weight: ${font.weight.semibold};
    font-size: ${font.size.md};
  }
`;

const SponsorLogoHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  div {
    margin: 1em;
  }
`;

const AboutPage = () => (
  <Layout title="About Us" description="About the York Web and App Development Society">
    <header>
      <h1>About Us</h1>
      <Tagline>
        We make bespoke websites and apps for people that otherwise would not be able to afford
        them.
      </Tagline>
    </header>
    <section>
      <p>
        Founded in January 2021, Yordevs is a society dedicated to creating bespoke websites and
        apps for Charities, Community Groups, and Campaigns that otherwise wouldn&apos;t be able to
        afford them. Through the process of creating the websites and apps, we hope to teach our
        members the technical and soft skills required in the workplace.
      </p>
      <p>
        We are made up of students who study a variety of courses at the University of York, but who
        share the desire to help those trying to improve society and improve their Web and App
        development skills.
      </p>
      <p>
        We aim to have no barrier to entry and, as a result, our members join together vastly
        different skill sets. Some will have never made a website, others will be well versed in
        multiple frameworks. We are always open to new members, experienced or beginners!
      </p>
      <p>
        <TextLink to="/get-involved">Find out how to get involved!</TextLink>
      </p>
    </section>
    <Committee />
    <ProjectLeaders />
    <hr style={{ borderTop: `1px solid ${color.heading}`, marginBottom: "2em" }} />
    <Sponsors>
      <h2>Proudly supported by</h2>
      <SponsorLogoHolder>
        <StaticImage
          src="../images/cgit-logo.svg"
          height={60}
          placeholder="traceSVG"
          objectFit="contain"
        />
      </SponsorLogoHolder>
    </Sponsors>
  </Layout>
);

export default AboutPage;
