import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import Layout from "../components/Layout";
import TextLink from "../components/TextLink";

import config from "../theme/config";
const { color, font } = config;

const shortcodes = {
  a: ({ href, children }) => <TextLink to={href}>{children}</TextLink>,
};

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 0;
`;

const Details = styled.p`
  color: ${color.accent};
  font-weight: ${font.weight.semibold};
  margin-bottom: 1em;
`;

const PostHeader = styled.header`
  margin-bottom: 3em;
`;

const BackLink = styled(TextLink)`
  width: fit-content;
  padding-inline: 4px;
`;

const PostTemplate = ({
  data: {
    mdx: {
      frontmatter: { title, date, author },
      body,
    },
  },
}) => {
  return (
    <Layout title={title}>
      <BackLink to="/blog">{"< Back"}</BackLink>
      <MDXProvider components={shortcodes}>
        <article className="blog-post">
          <PostHeader>
            <Title>{title}</Title>
            <Details>
              {author} on {date}
            </Details>
          </PostHeader>
          <MDXRenderer>{body}</MDXRenderer>
        </article>
      </MDXProvider>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        author
      }
    }
  }
`;

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};
