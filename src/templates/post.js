import React, { useEffect, useState } from "react";
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

const fetchViews = (slug, setViews) => {
  fetch("http://localhost:4000/new-visit", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Page: slug }),
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      setViews(json.views);
    })
    .catch((err) => {
      console.log(err);
      setViews("Error when fetching");
    });
};

const PostTemplate = ({
  data: {
    markdownRemark: {
      frontmatter: { title, date, author, slug },
      html,
    },
  },
}) => {
  const [views, setViews] = useState("Fetching...");
  useEffect(() => {
    fetchViews(slug, setViews);
  }, []);

  return (
    <Layout title={title}>
      <article className="blog-post">
        <TextLink to="/blog">{"< Back"}</TextLink>
        <Title>{title}</Title>
        <Details>
          {author} on {date}
          <br />
          Views: {views}
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
  data: PropTypes.object.isRequired,
};
