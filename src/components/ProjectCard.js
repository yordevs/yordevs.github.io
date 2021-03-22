import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  margin: 0 0.5em;
  margin-bottom: 1em;
`;

const ProjectDescription = styled.p`
  text-align: center;
  font-style: italic;
`;

const ProjectPreview = styled.img`
  width: 300px;
  border: 5px solid #555;
`;

import Button from "./Button";

const ProjectCard = ({
  projectName,
  client,
  projectDescription,
  blogURL = "/projects",
  preview = false,
}) => {
  return (
    <Card>
      <ProjectPreview src={preview} />
      <h2>{projectName}</h2>
      <h3>{client}</h3>
      <ProjectDescription>{projectDescription}</ProjectDescription>
      <Button to={blogURL}>Find Out More</Button>
    </Card>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  client: PropTypes.string,
  blogURL: PropTypes.string,
  picture: PropTypes.any,
  preview: PropTypes.string,
};
