import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import TextLink from "../components/TextLink";

import ProjectCard from "../components/ProjectCard";

const ProjectHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  gap: 1rem;
  column-gap: 1rem;
`;

import yordevsPreview from "../images/Projects/Yordevs/Yordevs_Main.png";
import googlePreview from "../images/Projects/Google/Google_Main.png";

const ProjectsPage = () => {
  return (
    <Layout title="Our Work">
      <h1>Our Work</h1>
      <p>
        Here are some examples of work we&apos;ve completed, if you like them and want us to do
        something similar for you, <TextLink to="/contact">Contact Us</TextLink>
      </p>
      <ProjectHolder>
        <ProjectCard
          projectName="Yordevs Site"
          client="York Community Web and App Development"
          projectDescription="Our first ever project was to make this website, it had to be eye catching and informative so other people trusted us to make their websites"
          preview={yordevsPreview}
          blogURL="/blog"
        />
        <ProjectCard
          projectName="Google Search"
          client="Google"
          projectDescription="That's right, we made google, this definetly isn't just a place holder"
          preview={googlePreview}
          blogURL="/blog"
        />
        <ProjectCard
          projectName="Google Search"
          client="Google"
          projectDescription="That's right, we made google, this definetly isn't just a place holder"
          preview={googlePreview}
          blogURL="/blog"
        />
        <ProjectCard
          projectName="Google Search"
          client="Google"
          projectDescription="That's right, we made google, this definetly isn't just a place holder"
          preview={googlePreview}
          blogURL="/blog"
        />
        <ProjectCard
          projectName="Google Search"
          client="Google"
          projectDescription="That's right, we made google, this definetly isn't just a place holder"
          preview={googlePreview}
          blogURL="/blog"
        />
      </ProjectHolder>
    </Layout>
  );
};

export default ProjectsPage;
