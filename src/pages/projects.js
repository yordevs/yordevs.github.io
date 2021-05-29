import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import styled from "styled-components";
import TextLink from "../components/TextLink";
import ProjectCard from "../components/ProjectCard";

const ProjectHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  gap: 1rem;
  column-gap: 1rem;
`;

const ProjectsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Projects = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <ProjectCard key={edge.node.id} project={edge.node} />);

  return (
    <Layout title="Our Work">
      <h1>Our Work</h1>
      <p>
        Here are some examples of work we&apos;ve completed, if you like them and want us to do
        something similar for you, <TextLink to="/contact">Contact Us</TextLink>
      </p>
      <ProjectHolder>{Projects}</ProjectHolder>
    </Layout>
  );
};

export default ProjectsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            client
            description
            lead
            developers
            preview {
              childImageSharp {
                gatsbyImageData(
                  height: 130
                  width: 250
                  quality: 100
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`;

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired,
};
