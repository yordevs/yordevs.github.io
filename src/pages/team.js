import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import CommitteeCard from "../components/CommitteeCard";

import ProjectLeaderCard from "../components/ProjectLeaderCard";
import TextLink from "../components/TextLink";
import { StaticImage } from "gatsby-plugin-image";

const RowHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  gap: 1rem;
  column-gap: 1rem;
`;

const TeamPage = () => {
  return (
    <Layout title="Meet the Team">
      <h2>The Committee</h2>
      <RowHolder>
        <CommitteeCard
          fullName="Adam Barr"
          role="President"
          pronouns="He/Him"
          course="Computer Science"
          picture={
            <StaticImage
              src="../images/AdamTeamPhoto.jpg"
              width={200}
              height={200}
              placeholder="blurred"
              style={{ marginBottom: "0.5em" }}
            />
          }
        />
        <CommitteeCard
          fullName="Sam Harrison"
          role="Secretary"
          pronouns="He/Him"
          course="Computer Science"
        />
        <CommitteeCard
          fullName="Sarah Wakelin"
          role="Treasurer"
          pronouns="She/Her"
          course="Maths"
          picture={
            <StaticImage
              src="../images/SarahTeamPhoto.jpg"
              width={200}
              height={200}
              placeholder="blurred"
              style={{ marginBottom: "0.5em" }}
            />
          }
        />
      </RowHolder>
      <h2>Project Leaders</h2>
      <p>The people responsible for managing each of our projects.</p>
      <p>
        If you have an idea for a project we could do, please{" "}
        <TextLink to="/contact">let us know!</TextLink>
      </p>
      <RowHolder>
        <ProjectLeaderCard
          fullName="Ben Silverman"
          project="Yordevs Website"
          pronouns="He/Him"
          course="Computer Science"
          picture={
            <StaticImage
              src="../images/BenTeamPhoto.jpg"
              width={200}
              height={200}
              placeholder="blurred"
              style={{ marginBottom: "0.5em" }}
            />
          }
          projectDescription="Designing and development of the official Yordevs website."
        />
      </RowHolder>
    </Layout>
  );
};

export default TeamPage;