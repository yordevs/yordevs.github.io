import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import CommitteeCard from "../components/CommitteeCard";

import AdamImage from "../images/AdamTeamPhoto.jpg";
import SarahImage from "../images/SarahTeamPhoto.jpg";

import ProjectLeaderCard from "../components/ProjectLeaderCard";
import TextLink from "../components/TextLink";

const RowHolder = styled.div`
  width: 100%;
  max-width: 90vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 20px;
  padding-bottom: 10px;
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
          picture={AdamImage}
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
          picture={SarahImage}
        />
      </RowHolder>
      <h2>Project Leaders</h2>
      <RowHolder>
        <p>
          We don&apos;t have any active projects right now, if you have a project for us to do
          please <TextLink to="/contact">let us know</TextLink>
        </p>
        <ProjectLeaderCard
          fullName="Ben Silverman"
          project="Yordevs Website"
          pronouns="He/Him"
          course="Computer Science"
          projectDescription="Designing and development of the official Yordevs website."
        />
      </RowHolder>
    </Layout>
  );
};

export default TeamPage;
