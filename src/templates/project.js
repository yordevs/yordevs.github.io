import React from "react";
import { graphql } from "gatsby";

import styled from "styled-components";
import Layout from "../components/Layout";
import Button from "../components/Button";

const Title = styled.h1``;
const Client = styled.h2``;
const Lead = styled.h3``;
const Developers = styled.h3`
  font-weight: normal;
`;

const Template = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout title={frontmatter.title}>
      <div>
        <div>
          <Title>Project: {frontmatter.title}</Title>
          <Client>Client: {frontmatter.client}</Client>
          <Lead>Project Lead: {frontmatter.lead}</Lead>
          <Developers>
            Developers: <i>{frontmatter.developers.toString()}</i>
          </Developers>
          <Button to={frontmatter.link}>Visit Project</Button>
          <br></br>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  );
};

export default Template;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
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
