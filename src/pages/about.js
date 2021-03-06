import React, { useEffect } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

import HeaderBackground from "../images/GeometricOrangeBackground.svg";

const HeaderDiv = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 40vh;
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

const AboutPage = () => {
  var headerText =
    "We make bespoke websites and apps for people who otherwise would not be able to afford them";
  var i = 0;
  var speed = 40;

  function typeWriter() {
    if (i < headerText.length) {
      document.getElementById("HeaderText").innerHTML += headerText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
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
      <p>Paragaph one</p>
      <p>Paragraph two</p>
      <p>Sponsors?</p>
    </Layout>
  );
};

export default AboutPage;
