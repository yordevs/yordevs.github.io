import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  margin: 0 0.5em;
  margin-bottom: 1em;
`;

const Photo = styled.img`
  object-fit: cover;
  object-position: center;
  margin-bottom: 0.5em;
`;

const ProjectDescription = styled.p`
  text-align: center;
  font-style: italic;
`;

import blankTeamPhoto from "../images/BlankTeamPhoto.jpg";
import Button from "./Button";

const ProjectLeaderCard = ({
  fullName,
  project,
  pronouns,
  course,
  projectDescription,
  projectURL = "/projects",
  picture = false,
}) => {
  return (
    <Card>
      {picture ? picture : <Photo src={blankTeamPhoto} width="200px" height="200px" />}
      <h2>{fullName}</h2>
      <h3>{project}</h3>
      <p>{course}</p>
      {pronouns && <p>{pronouns}</p>}
      <ProjectDescription>{projectDescription}</ProjectDescription>
      <Button to={projectURL}>Find Out More</Button>
    </Card>
  );
};

export default ProjectLeaderCard;

ProjectLeaderCard.propTypes = {
  project: PropTypes.string,
  projectDescription: PropTypes.string,
  fullName: PropTypes.string,
  pronouns: PropTypes.string,
  course: PropTypes.string,
  picture: PropTypes.any,
  projectURL: PropTypes.string,
};
