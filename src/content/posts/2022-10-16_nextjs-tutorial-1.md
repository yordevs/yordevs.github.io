---
slug: "/blog/nextjs-tutorial-1"
date: "2022-10-16"
title: NextJS Tutorial 1
author: "Harry Wickham"
---

This is the first post in a series of tutorials on how to build a website using NextJS. In this tutorial, we'll be setting up a basic NextJS project, looking at some of its features and then deploying it to Vercel.

---

# Installing NodeJS

First, we need to install NodeJS. This is a JavaScript runtime environment that allows us to run JavaScript code outside of a browser. We can download it from [here](https://nodejs.org/en/download/). Once it's installed, we can check that it's working by opening a terminal and running the following command:

```bash
node -v
```

This should print out the version of NodeJS that we have installed. If it doesn't, then we'll need to troubleshoot the installation.

# Initiating a NextJS project

Next, we need to create a new NextJS project. We can do this by running the following command in a terminal (Make sure you are in the directory you want to create the project in):

```bash
npx create-next-app nextjs-tutorial-1
```

This will create a new directory called `nextjs-tutorial-1` in the current directory. We can then navigate into this directory and start the development server by running the following commands:

```bash
cd nextjs-tutorial-1
npm run dev
```

This will start a development server on `localhost:3000`. If we navigate to this address in a browser, we should see the following page:

![NextJS Default Page](https://yordevs.com/images/nextjs-tutorial-1/nextjs-default-page.png)

# Understanding JSX and React

NextJS uses a syntax called JSX to write HTML in JavaScript. This is a bit confusing at first, but it's actually quite simple. JSX is just a way of writing HTML in JavaScript. For example, the following code is valid JSX:

```jsx
<div>
    <h1>Hello, world!</h1>
    <p>This is some text.</p>
    <p>{variable1}</p>
</div>
```

If we want to use a variable in our JSX, we can just wrap it in curly braces. We can also use JavaScript expressions in our JSX. For example, we can use a `ternary operator`:

```jsx
<div>
    <h1>Hello, world!</h1>
    <p>This is some text.</p>
    {(variable1!==null)?(<p>{variable1}</p>):null}}
</div>
```

This will render the a heading and two paragraphs. The first paragraph will contain the text "This is some text", the second will contain the value of the `variable1` variable but only if it's not `null`.

# What is needed to create a basic page

As can be seen from the `index.js` page there is a function that is being exported and therefore being displayed at the `/` route. The function must return some kind of JSX. The `<div></div>`, `<h1></h1>` and `<p></p>` tags are all HTML but also JSX. 

To display the most basic text we need this export function. If we replace what is in the `index.js` file with the following code:

```jsx
export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  )
}
```

We will see the following page:

![Hello world page](https://yordevs.com/images/nextjs-tutorial-1/hello-world-page.png)

Lets now incorporate a variable into the page. We can do this by creating a variable in the function and then using it in the JSX. We can do this by changing the current code in `index.js` to:

```jsx
export default function Home() {
  const name = "Harry"
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  )
}
```

This should now be saying hello to me. Try changing the variable to your name and see what happens.

Now if we include some JavaScript logic in the JSX we can do some more interesting things. We can do this by adding a `ternary operator` to the JSX. The ternary operator is a way of writing an `if` statement in one line. It is written as follows:

```jsx
(condition)?("run if true"):("run if false")
```
Try pasting the following code blocks into the terminal and see what happens:

```jsx
(1===1)?("true"):("false")
```
```jsx
(1===2)?("true"):("false")
```


We can use this by changing the current code in `index.js` to:

```jsx
export default function Home() {
  const name = "Harry";
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {name === "Harry" ? <p>You are the creator of this website!</p> : null}
    </div>
  );
}
```

This should now be saying hello to me and telling me that I am the creator of the website. Try changing the variable to your name and see what happens.


# Understanding NextJS pages

NextJS uses a file-based routing system. This means that each page in our website is represented by a file in the `pages` directory. For example, if we want to create a page at the URL `/about`, we can create a file called `about.js` in the `pages` directory. This file will then be rendered when we navigate to the `/about` URL.

NextJS also supports dynamic routes. For example, if we want to create a page at the URL `/blog/[slug]`, we can create a file called `[slug].js` in the `pages/blog` directory. This file will then be rendered when we navigate to any URL that starts with `/blog/`. The value of the `slug` variable will be available in the `props` object of the page component.

# Creating a new page

Let's create a new page for our website. We'll create a page at the URL `/blog/hello-world`. We can do this by creating a file called `hello-world.js` in the `pages/blog` directory (you will have to create a blog folder inside the generated pages folder). This file should contain the following code:

```jsx
export default function HelloWorld() {
    return <h1>Hello, world again!</h1>;
}
```

If we navigate to `localhost:3000/hello-world` in a browser, we should see the following page:

![Hello, world! page](https://yordevs.com/images/nextjs-tutorial-1/hello-world-again-page.png)

# Creating a new dynamic page

Next, let's create a new dynamic page for our website. We'll create a page at the URL `/blog/[slug]`. We can do this by creating a file called `[slug].js` in the `pages/blog` directory. This file should contain the following code:

```jsx
import { useRouter } from "next/router";

export default function Post() {
    const router = useRouter();
    const { slug } = router.query;
    return <p>Post: {slug}</p>;
};
```

If we navigate to `localhost:3000/blog/hello-world` in a browser, we should see the following page:

![Dynamic page](https://yordevs.com/images/nextjs-tutorial-1/dynamic-page.png)

We can change the url to any other value and the page will update accordingly. For example, if we navigate to `localhost:3000/blog/nextjs-tutorial-1`, we should see the following page:

![Dynamic page 2](https://yordevs.com/images/nextjs-tutorial-1/dynamic-page-2.png)

# Deploying to Vercel

Now that we have a basic NextJS website, we can deploy it to Vercel. Vercel is a cloud platform for static sites and Serverless Functions. It is developed by the creators of NextJS and is the easiest way to deploy NextJS websites.

To deploy our website to Vercel, we need to create a Vercel account. We can do this by going to [https://vercel.com/signup](https://vercel.com/signup). Once we have created an account, we can link it to our GitHub account. We can do this by going to [https://vercel.com/import](https://vercel.com/import) and clicking on the GitHub button.

Next, we need to select the repository that contains our website. Once we have selected the repository, we can click on the "Deploy" button (everything else should be setup already).

Vercel will now create a new project and deploy our website. Once the deployment is complete, we can click on the "Visit" button to view our website.

Congratulations! We have now deployed our first NextJS website to Vercel.
