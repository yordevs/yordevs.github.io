import React from "react";

import TextLink from "./TextLink";

const PostLink = ({ post }) => (
  <div>
    <TextLink to={post.frontmatter.slug}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </TextLink>
  </div>
);

export default PostLink;
