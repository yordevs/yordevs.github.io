import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 250px;
  padding: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;

const Photo = styled.img`
  object-fit: cover;
  object-position: center;
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
      <Photo src={picture ? picture : blankTeamPhoto} width="200px" height="200px" />
      <h2>{fullName}</h2>
      <h3>{project}</h3>
      <p>{course}</p>
      <p>{pronouns}</p>
      <p>
        <i>{projectDescription}</i>
      </p>
      <Button to={projectURL}>{project}</Button>
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
