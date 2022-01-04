---
slug: "/projects/the-lemon-press"
date: "2021-04-01"
title: "The Lemon Press"
preview: "../../images/Projects/Yordevs/Yordevs_Main.png"
client: "The Lemon Press"
description: "We made a new website for the on campus satirical magazine 'The Lemon Press', mostly so they didn't write any articles about us"
lead: "Adam Barr"
developers: ["Ben Silverman", "Harry Wickham"]
link: "https://thelemonpress.co.uk"
---

---

# The Lemon Press Website

When the University of Yorks most famous (and only) satirical print magazine approached us for help designing and creating a new website for them, we knew we couldn’t say no, mostly because of the satirical articles we were scared they could write satirical articles about us.

The final website can be found at<https://thelemonpress.co.uk>, it is a static site built using the Gatsby framework, sourcing its content from a WordPress instance and the issuu.com API. This solution provides fast load times and high ranking SEO performance along with incredibly cheap hosting using a reliable CMS that we didn’t have to design ourselves. The site itself is hosted using GitHub Pages and rebuilds itself on a regular basis to ensure it always provides the freshest available content.

We used Gatsby to build the site, an open-source javascript framework based on React. Gatsby was chosen as it is designed to build static sites that load fast, and has extensive support for sourcing content from different sources.

The[gatsby-source-wordpress](https://www.gatsbyjs.com/plugins/gatsby-source-wordpress/) plugin allowed us to easily query the WordPress instance to collect the relevant content for pages. For development purposes, we created a digital ocean droplet with a WordPress instance running on it, however the final deployed site source from a BlueHost instance, as it’s more stable and has more support for when things go wrong. We tried to give as much freedom to the lemon press team as possible, by sourcing all of our tags and featured content from WordPress.

The[Print Issues](https://thelemonpress.co.uk/print-issues) page is a completely bespoke page that wouldn’t be possible to create using any off the shelf website builders, the content is sourced from the issuu.com API, and by using the [gatsby-source-rest-api](https://www.gatsbyjs.com/plugins/gatsby-source-rest-api/) we could query content and create pages in much the same way as WordPress. The page itself is simply a responsive CSS grid, where the columns will auto-size to best fit on the screen no matter its size, we are (I am) pretty proud of how it turned out😏.

GitHub Actions are used to deploy the site, there are two reasons the site could be redeployed, the most common being that the scheduled cron job is run to rebuild the live site so the content on it re-fetched from WordPress and is up to date, the second is on any push to the main branch. The build time is steadily increasing as the site grows, however, Gatsby does allow us to cache previous builds so pages that haven’t changed don’t need to be built from scratch.
  
If you want to learn more about how we made this site or find out how to make a website like it yourself, join our discord to say hello and find out more about what we’re up to:<https://discord.gg/j8fbqEP2TD> 
