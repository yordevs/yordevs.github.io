/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: "Yordevs Website",
    description:
      "The official website for Yordevs, the University of York's Web Development society!",
    author: "Yordevs",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
  ],
};
