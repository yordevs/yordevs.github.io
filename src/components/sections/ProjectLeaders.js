import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import styled from "styled-components";

import TextLink from "../TextLink";
import ProjectLeaderCard from "../ProjectLeaderCard";

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  gap: 1rem;
  column-gap: 1rem;
`;

const ProjectLeaders = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectLeadersJson {
        edges {
          node {
            id
            name
            course
            pronouns
            project
            projectDescription
            projectURL
            picture {
              childImageSharp {
                gatsbyImageData(
                  height: 200
                  width: 200
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
  `);

  const projectLeaders = data.allProjectLeadersJson.edges;

  return (
    <section>
      <h2>Project Leaders</h2>
      <p>The people responsible for managing each of our projects.</p>
      <p>
        If you have an idea for a project we could do, please{" "}
        <TextLink to="/contact">let us know!</TextLink>
      </p>
      <Row>
        {projectLeaders &&
          projectLeaders.map(({ node }, i) => (
            <ProjectLeaderCard
              fullName={node.name}
              project={node.project}
              course={node.course}
              pronouns={node.pronouns}
              picture={getImage(node.picture)}
              projectDescription={node.projectDescription}
              projectURL={node.projectURL}
              key={i}
            />
          ))}
      </Row>
    </section>
  );
};

export default ProjectLeaders;
