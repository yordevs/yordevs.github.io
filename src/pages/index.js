import React from "react";
// import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Button from "../components/Button";
// import TextLink from "../components/TextLink";

const IndexPage = () => (
  <Layout
    title="Home"
    description="Welcome to Yordevs, the University of York's Web Development Society!">
    <h1>Yordevs</h1>
    <p>The University of York&apos;s Web Development society!</p>
    <Button>About Us</Button>
    <Button>Contact</Button>
  </Layout>
);

export default IndexPage;
