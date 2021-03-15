import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Button from "../components/Button";
import TextLink from "../components/TextLink";

const IndexPage = () => (
  <Layout
    title="Home"
    description="Welcome to Yordevs, the University of York's Web Development Society!">
    <p>Hello, world!</p>

    <h1>This is a Heading 1</h1>
    <h2>This is a Heading 2</h2>
    <h3>This is a Heading 3</h3>
    <p>This is a paragraph</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet convallis nulla, ac
      ullamcorper nunc. Fusce ultrices mi eu lectus gravida iaculis. Phasellus sit amet turpis
      molestie risus fermentum porttitor. Nulla vel leo vel magna elementum consequat non accumsan
      tortor. Nulla arcu purus, dictum eu tristique eu, viverra et nulla. Phasellus in dictum risus,
      a aliquam risus. Maecenas ut lorem in massa dignissim finibus. Aliquam aliquet eget arcu in
      convallis. Nam feugiat dui vel elementum euismod. Maecenas facilisis eleifend leo, in pulvinar
      orci fringilla vel. Suspendisse in libero ac ipsum condimentum pellentesque.
    </p>
    <h2>Text Link</h2>
    <p>
      Heres an example of a <TextLink to="/projects">Internal Text Link</TextLink> and an{" "}
      <TextLink href="https://google.com">External Text Link</TextLink>
    </p>
    <h2>Buttons</h2>
    <p>
      Buttons currently come in two types, and can either act as internal Gatsby{" "}
      <code>{"<Link/>"}</code> components or regular anchor tags
    </p>
    <Button to="/about" primary>
      Internal primary
    </Button>
    <Button to="/projects">Internal default</Button>
    <Button href="https://google.com" primary>
      External primary
    </Button>
    <Button href="https://bing.com">External default</Button>
    <StaticImage
      src="../images/longboi.jpg"
      width={350}
      placeholder="dominantColor"
      objectFit="contain"
    />
  </Layout>
);

export default IndexPage;
