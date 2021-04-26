import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import config from "../theme/config";
const { color, font } = config;

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1em 0;
`;

const Photo = styled.img`
  object-fit: cover;
  object-position: center;
  margin-bottom: 0.5em;
`;

const Name = styled.h3`
  font-size: ${font.size.lg};
  margin-bottom: 0em;
`;

const Project = styled.h3`
  color: ${color.accent};
  font-weight: ${font.weight.semibold};
  text-transform: uppercase;
  font-size: ${font.size.base};

  margin-bottom: 1em;
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
      {picture || <Photo src={blankTeamPhoto} width="200px" height="200px" />}
      <Name>{fullName}</Name>
      <Project>{project}</Project>
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
