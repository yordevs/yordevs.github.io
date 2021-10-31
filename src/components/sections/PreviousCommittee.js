import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import styled from "styled-components";

import CommitteeCard from "../CommitteeCard";
import config from "../../theme/config";
const { color, font } = config;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  gap: 1rem;
  column-gap: 1rem;
`;

const ToggleVisiblility = styled.a`
  text-decoration: none;
  color: ${color.accent};

  transition: all 0.15s ease;

  font-weight: ${font.weight.semibold};

  border-radius: 2px;

  &:hover,
  &:focus,
  &:active {
    background: ${color.accent};
    color: ${color.background};
    cursor: pointer;
  }
`;

const PreviousCommittee = () => {
  const [visabilityState, setVisabilityState] = useState();
  const toggle = () => setVisabilityState(!visabilityState);
  const data = useStaticQuery(graphql`
    query {
      allPreviousCommitteeJson {
        edges {
          node {
            year
            members {
              academicYear
              course
              name
              pronouns
              role
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
    }
  `);

  const members = data.allPreviousCommitteeJson.edges;

  return (
    <section>
      <ToggleVisiblility onClick={toggle}>Previous Committees</ToggleVisiblility>
      {visabilityState ? (
        members.map(({ node }, i) => (
          <>
            <h2>{node.year}</h2>
            <Row>
              {node.members.map(({ name, role, course, pronouns, academicYear, picture }, i) => (
                <CommitteeCard
                  fullName={name}
                  role={role}
                  course={course}
                  pronouns={pronouns}
                  academicYear={academicYear}
                  picture={getImage(picture)}
                  key={i}
                />
              ))}
            </Row>
          </>
        ))
      ) : (
        <></>
      )}
    </section>
  );
};

export default PreviousCommittee;
