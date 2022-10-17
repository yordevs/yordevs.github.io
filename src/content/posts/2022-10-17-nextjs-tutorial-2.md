---
slug: "/blog/nextjs-tutorial-2"
date: "2022-10-17"
title: NextJS Tutorial 2
author: "Harry Wickham"
---

This is the second post in a series of tutorials on how to build a website using NextJS. In this tutorial, we'll be learning a little more about ReactJS and how we can use it within a NextJS project.

---

# Tutorial 2: ReactJS Basics

## The main features of ReactJS

### Components

ReactJS is a JavaScript library for building user interfaces. It's main feature is the ability to create components. A component is a piece of code that can be reused throughout a project. For example, we could create a component that displays a user's profile. We could then use this component in multiple places throughout our project. This is useful because it means we don't have to write the same code multiple times. It also means that if we want to make a change to the component, we only have to do it in one place. 

In our NextJS project we can create a new component by creating a new file in a new `components` directory (in the main project folder). For example, we could create a new file called `Profile.js` and add the following code:

```jsx
export default function Profile() {
  return (
    <div>
      <h1>Harry Wickham</h1>
      <p>Software Developer</p>
    </div>
  );
}
```

We can then import this component into another file and use it. For example, we could import it into the `index.js` file and use it like this:

```jsx
import Profile from "../components/Profile";

export default function Home() {
    return (
        <div>
            <Profile />
        </div>
    );
}
```

This should now be displaying my profile on the home page. Try changing the code in the `Profile.js` file and see what happens.

Try adding 2 profile components to the `index.js` file and see what happens.

```jsx
<div>
    <Profile/>
    <Profile/>
</div>
```


### Props

We can also pass data into our components using props. Props are variables that we can pass through into the component. For example, We could then pass the user's name and job title into the profile component as props. This would allow us to use the same component to display multiple users' profiles. We can do this by changing the code in the `Profile.js` file to:

```jsx
export default function Profile({name, jobTitle}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{jobTitle}</p>
    </div>
  );
}
```

We can then pass the user's name and job title into the component as props. We can do this by changing the code in the `index.js` file to:

```jsx
import Profile from "../components/Profile";

export default function Home() {
  return (
    <div>
      <Profile jobTitle="President" name="Harry Wickham" />
      <Profile jobTitle="Treasurer" name="Adam Barr" />
      <Profile jobTitle="Secretary" name="Khalidaabir Rizwanullah" />
    </div>
  );
}
```

This should now be displaying 3 profiles on the home page.

### State

State is a way of storing data in a component. We can use state to store data that we want to change over time. For example, we could use state to store the number of times a button has been clicked. We can do this by adding the following code to the `index.js` file:

```jsx
import { useState } from "react";
import Profile from "../components/Profile";

export default function Home() {
  const [followers, setFollowers] = useState(0);
  return (
    <div>
      <Profile jobTitle="President" name="Harry Wickham" />
      <p>Followers: {followers}</p>
      <button onClick={() => setFollowers(followers + 1)}>Click Me</button>
    </div>
  );
}
```

This should now be displaying a button on the home page. When you click the button, the number of followers should increase by 1.

If we wanted to add this into the Profile component we could do this by changing the code in the `Profile.js` file to:

```jsx
import { useState } from "react";

export default function Profile({ name, jobTitle }) {
  const [followers, setFollowers] = useState(0);
  return (
    <div>
      <h1>{name}</h1>
      <p>{jobTitle}</p>
      <p>Followers: {followers}</p>
      <button onClick={() => setFollowers(followers + 1)}>Follow</button>
    </div>
  );
}
```

Try adding more profile components to `index.js`.

Now if you click the follow button on the home page, the number of followers should increase by 1 separately for each profile.

### 

### Styling

Styled-Components is a library that allows us to style our components using CSS. We can install it by running the following command in the terminal:

```bash
yarn add styled-components
```

This will install the `styled-components` package from the yarn dependency manager.

We can then use it by importing it into the `Profile.js` file and wrapping the component in a styled component. For example, we could change the code in the `Profile.js` file to:

```jsx
import { useState } from "react";
import styled from "styled-components";

const StyledProfile = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  color: black;
`;

export default function Profile({ name, jobTitle }) {
  const [followers, setFollowers] = useState(0);
  return (
    <StyledProfile>
      <h1>{name}</h1>
      <p>{jobTitle}</p>
      <p>Followers: {followers}</p>
      <button onClick={() => setFollowers(followers + 1)}>Follow</button>
    </StyledProfile>
  );
}
```

This should now be displaying the profile with a grey background and a border.

Try changing the styling in the `StyledProfile` component and see what happens.

There are many other types of component you can style such as a button. For example, we could add a styled button in `Profile.js`:

```jsx
const StyledButton = styled.button`
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #e5e5e5;
  }
`;
```

And then change the button `<button></button>` into a styled button `<StyledButton></StyledButton>`.

We might be changing our styling system in the future, so don't worry if you don't understand everything about styled components.
