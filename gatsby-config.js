/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: "Yordevs Website",
    titleTemplate: "Yordevs // %s",
    description:
      "The official website for Yordevs, the University of York's Web Development society!",
    author: "Yordevs",
    url: "https://yordevs.com",
    image: "/images/defaultImage.png",
    twitterUsername: "@yordevs",
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
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `${__dirname}/src/images/favicon.png`,
      },
    },
  ],
};
