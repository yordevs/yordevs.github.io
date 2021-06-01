import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import Layout from "../components/Layout";
import Button from "../components/Button";
import TextLink from "../components/TextLink";

const shortcodes = {
  a: ({ href, children }) => <TextLink to={href}>{children}</TextLink>,
};

const Title = styled.h1``;

const Client = styled.h2``;

const Lead = styled.h3``;

const Developers = styled.h3`
  font-weight: normal;
`;

const ProjectTemplate = ({
  data: {
    mdx: {
      frontmatter: { title, client, lead, developers, link },
      body,
    },
  },
}) => {
  return (
    <Layout title={title}>
      <MDXProvider components={shortcodes}>
        <Title>Project: {title}</Title>
        <Client>Client: {client}</Client>
        <Lead>Project Lead: {lead}</Lead>
        <Developers>
          Developers: <i>{developers.join(", ")}</i>
        </Developers>
        <Button to={link}>Visit Project</Button>
        <br></br>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export default ProjectTemplate;

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        client
        description
        lead
        developers
        link
      }
    }
  }
`;

ProjectTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};
