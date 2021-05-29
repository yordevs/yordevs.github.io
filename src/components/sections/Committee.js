import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import styled from "styled-components";

import CommitteeCard from "../CommitteeCard";

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  gap: 1rem;
  column-gap: 1rem;
`;

const Committee = () => {
  const data = useStaticQuery(graphql`
    query {
      allCommitteeJson {
        edges {
          node {
            id
            name
            role
            course
            pronouns
            academicYear
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

  const members = data.allCommitteeJson.edges;

  return (
    <section>
      <h2>Meet the Team</h2>
      <Row>
        {members &&
          members.map(({ node }, i) => (
            <CommitteeCard
              fullName={node.name}
              role={node.role}
              course={node.course}
              pronouns={node.pronouns}
              academicYear={node.academicYear}
              picture={getImage(node.picture)}
              key={i}
            />
          ))}
      </Row>
    </section>
  );
};

export default Committee;
