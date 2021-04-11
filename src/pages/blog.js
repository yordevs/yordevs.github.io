import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import PostLink from "../components/PostLink";
import Layout from "../components/Layout";

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout title="Blog">
      <h1>Blog</h1>
      {Posts}
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            author
          }
        }
      }
    }
  }
`;

BlogPage.propTypes = {
  data: PropTypes.object,
};
