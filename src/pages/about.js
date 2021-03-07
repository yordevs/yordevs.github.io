import React, { useEffect } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

import HeaderBackground from "../images/GeometricOrangeBackground.svg";
import TextLink from "../components/TextLink";

const paragraphOne =
  "Founded in January 2021, York Community Web and App Development is a society dedicated to creating bespoke websites and apps for Charities, Community Groups, and Campaigns who otherwise wouldn't be able to afford them. Through the process of creating the websites and apps we hope to teach our members the techinical and soft skills required in the workplace";
const paragraphTwo =
  "We are made up of students who study a varitety of courses at the University of York, but who share the desire to help those trying to improve society, and improve their Web and App development skills. We aim to have no barrier to entry, so our members started out with vastly different skill sets, some had never made a website, some well versed in multiple frameworks, we are always open to new memebers, experienced or beginners.";

const HeaderDiv = styled.div`
  display: flex;
  margin-left: 0%;
  margin-right: 0%
  width: 90%;
  min-height: 20em;
  height: 40vh;
  justify-content: center;
  align-items: center;
  padding: 1.5em;
  background-image: url(${HeaderBackground});
  background-position: center;
  background-size: "cover";
  background-repeat: "no-repeat";
  text-align: center;
  font-style: italic;
  color: black;
`;

const Sponsors = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: rgb(220, 220, 220);
`;

const SponsorLogoHolder = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
`;

const SponsorLogo = styled.div`
  height: 60px;
  width: 60px;
  background-color: blue;
`;

const AboutPage = () => {
  var headerText =
    "We make bespoke websites and apps for people who otherwise would not be able to afford them";
  var i = 0;
  var speed = 40;

  function typeWriter() {
    try {
      if (i < headerText.length) {
        document.getElementById("HeaderText").innerHTML += headerText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    } catch {
      i = 0;
    }
  }

  useEffect(() => {
    typeWriter();
  }, []);

  return (
    <Layout title="About Us" description="About the York Community Web and App Development Society">
      <HeaderDiv>
        <h2 id="HeaderText"></h2>
      </HeaderDiv>
      <p>{paragraphOne}</p>
      <p>{paragraphTwo}</p>
      <div>
        This is some text with a <TextLink href="https://www.google.com">link</TextLink>
      </div>
      <Sponsors>
        <h3 style={{ fontWeight: "normal" }}>Supported by</h3>
        <SponsorLogoHolder>
          <SponsorLogo />
          <SponsorLogo />
          <SponsorLogo />
          <SponsorLogo />
        </SponsorLogoHolder>
      </Sponsors>
    </Layout>
  );
};

export default AboutPage;
