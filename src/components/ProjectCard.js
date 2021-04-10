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

const NoImage = styled.div`
  width: 250px;
  height: 130px;
  border: 5px solid #555;
  background-color: #aaa;
  padding-top: 30px;
  font-size: 40px;
`;

import Button from "./Button";

const ProjectCard = ({
  project: {
    frontmatter: { title, client, description, preview, slug },
  },
}) => {
  return (
    <Card>
      {preview ? <ProjectPreview fixed={preview.childImageSharp.fixed} /> : <NoImage>?</NoImage>}
      <h2>{title}</h2>
      <h3>{client}</h3>
      <ProjectDescription>{description}</ProjectDescription>
      <Button to={slug}>Find Out More</Button>
    </Card>
  );
};

export default ProjectCard;
