import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

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

const ProjectPreview = styled(Img)`
  border: 5px solid #555;
`;

import Button from "./Button";

const ProjectCard = ({ project }) => {
  const displayPreview = () => {
    try {
      return <ProjectPreview fixed={project.frontmatter.preview.childImageSharp.fixed} />;
    } catch {
      // THIS IS AN ERROR, PLEASE MAKE SURE ALL PROJECTS HAVE WORKING PREVIEWS
      return (
        <h2 style={{ color: "red" }}>
          <b>
            <i>PROJECT PREVIEW DOES NOT EXIST</i>
          </b>
        </h2>
      );
    }
  };

  return (
    <Card>
      {displayPreview()}
      <h2>{project.frontmatter.title}</h2>
      <h3>{project.frontmatter.client}</h3>
      <ProjectDescription>{project.frontmatter.description}</ProjectDescription>
      <Button to={project.frontmatter.slug}>Find Out More</Button>
    </Card>
  );
};

export default ProjectCard;
