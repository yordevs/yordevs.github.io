---
slug: "/blog/nextjs-weather-1"
date: "2023-02-02"
title: NextJS Weather App 1
author: "Harry Wickham"
---

This is the first part of a tutorial on front end development using NextJS. In this tutorial we will be creating a weather app using NextJS.

---

# Part 1: Displaying the current weather for a given location

## What we are building

In this tutorial we will be building a weather app that will display the current weather for a given location. A deployed version of the app can be found [here](https://nextjs-weather-ten.vercel.app/) and you can have a look at the finished code [here](https://github.com/yordevs/nextjs-weather). This is what the app will look like after Part 1 and Part 2.


## Prerequisites and setup

To follow this tutorial you will need to have the following installed:

- NodeJS
- A code editor (I use VS Code)
- A terminal (I use Git Bash)

We will be using the [OpenWeatherMap API](https://openweathermap.org/api) to get the weather data. You can either create an account and get an API key or you can use the API key I have provided in the code examples `19bf94858624d4346e3ce37140858733`.

## Creating the project

To create the project we will use the [NextJS CLI](https://nextjs.org/docs/api-reference/create-next-app). This will create a new NextJS project with all the necessary files and dependencies.

```bash
npx create-next-app nextjs-weather@latest
```

There will be a couple of options that you will be asked to choose from. I have chosen the following:

- `TypeScript`: `No`
- `ESLint`: `Yes`
- `src/` directory: `No`
- `app/` directory: `No`
- `import alias`: Empty

This will create a new directory called `nextjs-weather` with all the necessary files and dependencies. We can now run the project using the following command:

```bash
cd nextjs-weather
npm run dev
```

This will start the development server and open the project in the browser [http://localhost:3000/](http://localhost:3000/). You should see the following page:

<img src="/images/nextjs-weather-1/nextjs-default-page.png" alt="NextJS 13 Default page " width="100%"/>

If you want to learn more about the structure of a NextJS project, you can read the [NextJS Tutorial 1](/blog/nextjs-tutorial-1) and [NextJS Tutorial 2](/blog/nextjs-tutorial-2).

Now we need to open the project in our code editor. I will be using VS Code for this tutorial. You can open the project in VS Code by running the following command:

```bash
code .
```

We will be using styled components for styling. To install styled components run the following command:

```bash
npm install styled-components
```

For live updates of NextJS to work with styled components, we will need to add the following to the `next.config.js` file:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
```

This will allow us to use styled components in our project. To implement this we will need to restart the development server. To do this, press `Ctrl + C` in the terminal and restart the server.

To make sure that the styled components are working correctly, we will add a new component in the file called `index.js` in the `pages` directory. This will be the home page of our app. We will add the following code to the file:

```js
import styled from 'styled-components'

const StyledDiv = styled.div`
  color: red;
`

export default function Home() {
  return <StyledDiv>Hello World</StyledDiv>;
}
```

This will create a new component called `StyledDiv` that will display the text `Hello World` in **red**. You should be able to see this page at [http://localhost:3000/](http://localhost:3000/).

<img src="/images/nextjs-weather-1/styled-components-test.png" alt="Styled components" width="100%"/>

A styled component must have a capital letter at the start of its name. When defining a styled component, you can use any HTML element or a React component. You can also use a styled component inside another styled component. For example, if we wanted to create a new styled component called `StyledDiv2` that is a child of `StyledDiv`, we can add do the following to our `index.js` file:

```js
const StyledDiv2 = styled(StyledDiv)`
  background: blue;
`
```

This will create a new styled component called `StyledDiv2` that will display the text `Hello World` in red with a **blue** background.

<img src="/images/nextjs-weather-1/styled-components-test-2.png" alt="Styled components 2" width="100%"/>

## Creating the weather app

Now we can start creating the weather app. We will start by creating a new component called `Weather.jsx` in a new top level directory called `components`. This will be the main component of the app. We will add the following code to the file:

```jsx
import styled from "styled-components";

const StyledDiv = styled.div`
  color: red;
`;

const StyledDiv2 = styled(StyledDiv)`
  background: blue;
`;

export default function Weather() {
  return <StyledDiv2>Hello World</StyledDiv2>;
}
```

With this component we can now import it into the `index.js` file in the `pages` directory. We will change the code to the following:

```js
import Weather from "../components/Weather";

export default function Home() {
  return <Weather />;
}
```

Nothing will change on the page at [http://localhost:3000/](http://localhost:3000/). This is because we are not using the `Weather` component that contains all of the same code as we had previously.

In the `Weather` component we want to display a card of the current weather. If we want to be able to reuse this component we will need to accept a prop called `weather` that will contain the weather data. We will also need to add a default value for the prop. We will change the code to the following:

```jsx
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #333333;
  background-color: #bbbbbb;
  border: 1px solid #333333;
  border-radius: 5px;
  padding: 4px;
  margin: 8px;
  min-width: 100px;
`;

export default function Weather({ weather }) {
  return <CardContainer>{weather.conditions}</CardContainer>;
}
```

This will create a styled component called `CardContainer` that will display the weather data in a card. We have also defined a prop called `weather` that will contain the weather data. In this case we are taking the `conditions` and displaying that.

Since we have the `Weather` component in the `index.js` file, we can now pass the weather data to the component. We will change the code to the following:

```jsx
import Weather from "../components/Weather";

export default function Home() {
  return <Weather weather={{ conditions: "Sunny" }} />;
}
```

We should get the following page:

<img src="/images/nextjs-weather-1/weather-card.png" alt="Weather card" width="100%"/>

According to the [OpenWeatherMap API documentation](https://openweathermap.org/current) the data returned will be in JSON and will have the structure:

```json
{
  "coord": {
    "lon": 10.99,
    "lat": 44.34
  },
  "weather": [
    {
      "id": 501,
      "main": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 298.48,
    "feels_like": 298.74,
    "temp_min": 297.56,
    "temp_max": 300.05,
    "pressure": 1015,
    "humidity": 64,
    "sea_level": 1015,
    "grnd_level": 933
  },
  "visibility": 10000,
  "wind": {
    "speed": 0.62,
    "deg": 349,
    "gust": 1.18
  },
  "rain": {
    "1h": 3.16
  },
  "clouds": {
    "all": 100
  },
  "dt": 1661870592,
  "sys": {
    "type": 2,
    "id": 2075663,
    "country": "IT",
    "sunrise": 1661834187,
    "sunset": 1661882248
  },
  "timezone": 7200,
  "id": 3163858,
  "name": "Zocca",
  "cod": 200
}                        
```

If we add this to our `Weather` component in `index.js`, this will simulate the data returned from the API.

We now need to update our weather component to display the data from the API. We will change the code to the following:

```jsx
import styled from "styled-components";

const Image = styled.img`
  object-fit: cover;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #333333;
  background-color: #bbbbbb;
  border: 1px solid #333333;
  border-radius: 5px;
  padding: 4px;
  margin: 8px;
  min-width: 100px;
`;

const TimeDate = styled.h4`
  font-size: 15px;
  color: #333333;
  text-align: center;
`;

export default function Weather({ weather }) {
  return (
    <>
      {weather ? (
        <CardContainer>
          <TimeDate>{weather.weather[0].dt_txt}</TimeDate>
          <h2>{Math.round(weather.main.temp)}°C</h2>
          <h3>{weather.weather[0].main}</h3>
          <Image
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt="weather icon"
          />
        </CardContainer>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
```

We have created 2 more styled components called `Image` and `TimeDate`. We have also added a ternary operator to the `CardContainer` that will display a loading message if the weather data is not available.

The fields that we want to display are taken from the returned data object shown above. We are displaying the date and time, the temperature, the weather conditions and the weather icon (the api sends the name of a png that can be used as the source of an image).

We should now have the following page:

<img src="/images/nextjs-weather-1/weather-card-api-data.png" alt="Weather card with API data" width="100%"/>

## 3. Fetching the weather data

