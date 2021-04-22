import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import TextLink from "../components/TextLink";

import config from "../theme/config";
const { color, font } = config;

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

const PostTemplate = ({
  data: {
    markdownRemark: {
      frontmatter: { title, date, author },
      html,
    },
  },
}) => {
  return (
    <Layout title={title}>
      <article className="blog-post">
        <TextLink to="/blog">{"< Back"}</TextLink>
        <PostHeader>
          <Title>{title}</Title>
          <Details>
            {author} on {date}
          </Details>
        </PostHeader>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
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
