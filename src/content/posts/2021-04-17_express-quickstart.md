---
slug: "/blog/express-quickstart"
date: "2021-04-17"
title: "An ExpressJS Quickstart"
author: "Ben Silverman"
tags: [quickstart, tutorial, javascript, express]
---

In this post we're going to cover how to create your own local web server using the `express` [package](https://npmjs.com/express). It's a pretty straightforward process, so let's begin!

# Setting up our project

If you haven't already, set up a new Node project.

From there we just need to install the `express` package with the following command:

```bash
npm install express
```

This will download everything that we need to get a basic web server up and running!

# The code

If you're just looking for some code to copy and paste then the following snippet will be enough.

```js:title=index.js
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello, world!");
});

app.listen(3000);
```

To run the server just type:

```bash
node index.js
```

You can test it working by visiting `localhost:3000` in your web browser, and should see something like this:

![](https://i.imgur.com/wcSGknH.png)

# A Deeper Explanation

If you fancy going into a little more detail, in this section we'll split up the code above into a few parts and explain what they each do. As a quick reminder, here's the snippet again (but with comments too!):

```js:title=index.js
// 1. Import and setup
const express = require("express");
const app = express();

// 2. Setting up endpoints
app.get("/", (request, response) => {
  response.send("Hello, world!");
});

// 3. Listening for requests
app.listen(3000);
```

## 1. Import and setup

In this section we're doing two things. First, we're importing our newly installed `express` package with:

```js
const express = require("express");
```

Next, we create an _instance_ of the Express server by typing:

```js
const app = express();
```

Creating instances is helpful in letting us create multiple servers with different "names" that can be referenced for different things. For example you could create three different servers and have them set up to do different things, all without interfering:

```js
const server1 = express();
const server2 = express();
const server3 = express();

// Each server can be set up to listen on a different port (explained later on) and won't interfere with each other.
server1.listen(3000);
server2.listen(4000);
server3.listen(5000);
```

## 2. Setting up endpoints

A server's _endpoints_ are basically URLs that can be used to access different kinds of data. In the example above with have an endpoint like so:

```js
app.get("/", (request, response) => {
  response.send("Hello, world!");
});
```

This creates an endpoint for our `app` server which responds to GET requests sent to the URL `localhost:3000`.

If you wanted to add another endpoint which did something when you sent a request to `localhost:3000/ping`, it would look something like:

```js
app.get("/ping", (request, response) => {
  response.send("Pong!");
});
```

> Try this out in your code, if you want!

The final part is a [callback](https://www.javascripttutorial.net/javascript-callback/) which takes the `request` and `response` as parameters, allowing you to process the request to the server (e.g. [parsing parameters](https://masteringjs.io/tutorials/express/params) included in the URL) and your response before you send it back.

## 3. Listening for requests

So far we've got a server which is based on the ExpressJS package we installed, and a few endpoints which are set up to do some stuff, but how do we actually get the server responding to our requests?

Much like a real life conversation, we need the server to be _listening_ for any requests that are sent to it.

This is, thankfully, a _really_ easy thing to do.

```js
app.listen(3000);
```

Here we're literally telling the server, "listen out for any requests sent to port 3000".

For reference, a port is like a way of dividing a network connection into lots of little numbered "doors" which can then have different types of network traffic assigned to them (e.g. all requests going to our server are on **port 3000**, all HTTP requests use **port 80**).

But yeah, that's what listening for requests is!

---

With all that said and done, you should have your very own web server up and running on your computer. Congratulations!

In a future article we're probably going to cover some slightly more advanced features of ExpressJS (e.g. other request types, middleware, schema validation), so keep your eyes peeled for that

If you had any trouble with this quickstart guide, please [contact us](/contact/) and we'll do our best to help you out. We're still getting in the swing of writing articles, so any feedback you have for us would be greatly appreciated!
