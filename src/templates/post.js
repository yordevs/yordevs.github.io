import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import TextLink from "../components/TextLink";

const Title = styled.h1`
  margin-bottom: 0;
`;

const Details = styled.p`
  font-style: italic;
  margin-bottom: 1em;
`;

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const {
    frontmatter: { title, date, author },
    html,
  } = markdownRemark;
  return (
    <Layout title={title}>
      <article className="blog-post">
        <TextLink to="/blog">{"< Back"}</TextLink>
        <Title>{title}</Title>
        <Details>
          {author} on {date}
        </Details>
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
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
