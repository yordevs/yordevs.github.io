import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import TextLink from "./TextLink";

import config from "../theme/config";
const { font, color } = config;

const Title = styled.h2`
  margin-bottom: 0;

  a {
    font-weight: ${font.weight.bold};
  }
`;

const Details = styled.p`
  font-style: italic;
`;

const Body = styled.div`
  border-bottom: 1px dashed ${color.accent};
  margin-bottom: 1em;
`;

const PostLink = ({
  post: {
    frontmatter: { author, date, slug, title },
    excerpt,
  },
}) => (
  <Body>
    <Title>
      <TextLink to={slug}>{title}</TextLink>
    </Title>
    <Details>
      {author} on {date}
    </Details>
    <p>{excerpt}</p>
  </Body>
);

export default PostLink;

PostLink.propTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  frontmatter: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
};
