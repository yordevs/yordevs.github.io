# Yordev's Website

This is a quick (temporary) guide on how to begin developing for this site.

1. Clone the repo.

```sh
git clone https://github.com/yordevs/yordevs.github.io
```

2. [Install Yarn](https://classic.yarnpkg.com/en/docs/getting-started) and then install the dependencies.

```sh
yarn install
```

3. Run Gatsby to start it watching for changes.

```sh
gatsby develop
```

4. Happy coding!

---

## How to make changes

The `gatsby` branch is set up as a protected branch and is used to build and deploy the final code for our website, so don't push directly to it. Instead, please do the following:

1. Create a new branch for the feature you're developing, with a descriptive name like `contact-page-content`.
2. Make your changes in that branch.
3. [Create a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) with `gatsby` as the destination branch.
4. Wait for someone to review and approve your changes (1 approval is required), after which they'll be merged into the `gatsby` branch and automatically deployed to the site!

---

## Common issues

- Gastsby CLI not installed, can be solved by running

  ```
  sudo npm install -g gatsby-cli
  ```

- Yarn not installed, can be solved by running
  ```
  sudo npm install -g yarn
  ```
