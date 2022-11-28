---
slug: "/blog/freeze-the-frosties-tutorial"
date: "2022-11-28"
title: "Freeze the Frosties: A simple JS game tutorial"
author: "Abir Rizwanullah"
---

# Freeze the Frosties Tutorial

## Intro

This guide is on how to make your very own simple JavaScript game (which may or may not be inspired by Whack-a-Mole...). We will only be using HTML, CSS and JS, but also a sprinkle of snow in preparation for the Winter festivities!

The aim of the game is to Freeze the Frosties before they melt! They start melting as soon as they are generated on the game board - unless the player clicks on them in time.

Feel free to experiment with the stylings, add any other manner of frozen creatures and come up with Christmassy alternatives as you like!

## Progress Monitoring

You can monitor the progress on the game being made by either opening this file in a web browser, but we would recommend setting up a live server. 

### Web Browser

1. Copy the full path of the index.html file
2. Paste it into a web browser
3. Refresh the page every time a change is made

### Live Server

1. Install Live Server from Extensions in VS Code
2. Right click the index.html file and click Open with Live Server - this should open a page in a web browser
3. All changes you make should be reflected on this page
Note: sometimes you may need to save a changed file before seeing it take effect

## File Creation

Create and open a directory called `freeze-the-frosties` in VS Code. Within this, create three files: `index.html`, `style.css`, `main.js`. 

See [above](#Progress-Monitoring) on how to monitor your progress.

### `index.html`

We use `index.html` to define the structure and content of our page. Before we get to that though, we need to add the HTML5 boilerplate code:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
	<script src="main.js"></script>
  </body>
</html>
```

All HTML documents have to begin with `<!DOCTYPE html>`. This lets a browser know that the type of this document is HTML. You can learn more about the other lines in this standardised template [here](https://www.freecodecamp.org/news/basic-html5-template-boilerplate-code-example/).

Edit the title tag content to **Freeze the Frosties**, as so:

```
    <!-- ... -->
    <title>Freeze the Frosties</title>
    <!-- ... -->
```

And add a h1 tag to the body:

```
  <!-- ... -->
  <body>
	<h1>Freeze the Frosties</h1>
	<script src="main.js"></script>
  </body>
  <!-- ... -->
```

You should now see the document title and h1 header text updated on the page.

Note: `<script src="main.js"></script>` should always be the last in the body element!

### `style.css`

We use `style.css` to style (i.e. change the appearance of) our page contents. Let's start by turning the text Yordevs yellow (hex code #f7ed74) and the background colour to a Yordevs red (hex code #aa211a)!

Add the following to style.css:

```
body {
    background-color: #aa211a;
    color: #f7ed74;
}
```

We can also change the font by adding the font-family property in the body element:

```
body {
    font-family: Arial, Helvetica, sans-serif;
    <!-- ... -->
}
```

To centre the title header, we can add the following to our body styling:

```
body {
    <!-- ... -->
    display: flex;
    justify-content: center;
    align-items: center;
}
```
Note: the value of the justify-content and align-items properties is the *Americanised* **center**, not the British **centre**!

You should see that the **Freeze the Frosties** now comes up in the centre.

### `main.js`

We use `main.js` to influence the behaviour of our page and its contents. We will add stuff here a bit later.

## Game Board

We now need to define a three by three grid for all the nine places that a Frosty can be generated. These 'generators' will be encapsulated by a board class in index.html. We can start by creating this outer board element:

```
  <body>
    <!-- ... -->
    <div id="board">
        
    </div>
  </body>
```
Note: we base most custom HTML elements off the div element and use the id attribute so that it can be referenced elsewhere (e.g style.css). The id is an identifier unique to an element.

To see the board element (currently it is inheriting all of the body styling, and so seems invisible), we can give it some size and border colour in the style.css file:

```
#board {
    height: 30em;
    width: 30em;
    border: 0.25em solid #f7ed74;
}
```
Note: We use a hash `#` to reference elements by their unique id name.
Note: `em` could be replaced by `px` (i.e. pixels). `em` is proportional to the default fontsize on the computer the page is being rendered on, but `px` is fixed.

You may note that the h1 header and the board element are rendering in line. This is because the body element is a flex container, which by default has its property `flex-direction` set to `row`. We can adjust this by adding the following to the body styling:

```
body {
    <!-- ... -->
    flex-direction: column;
}
```

Now we need to create the generators in the game board! Add nine generator elements within the board element as follows:

```
    <div id="board">
        <div class="generator"></div>
        <div class="generator"></div>
        <div class="generator"></div>
        <div class="generator"></div>
        <div class="generator"></div>
        <div class="generator"></div>
        <div class="generator"></div>
        <div class="generator"></div>
        <div class="generator"></div>
    </div>
```

Note: The `class` property is similar to `id` in that it can be used to reference an element, but a key difference is that multiple elements can be of the same class. This allows for the same styling to be applied to many elements, reducing code duplication.

To see the generator elements, we first need to adjust the styling of the board element to override the `display: flex` inherited by board from body. In style.css, add the following to the board styling:

```
#board {
    <!-- ... -->
    display: grid;
}
```

Now we need to colour the generator elements in; add the following to style.css:

```
.generator {
    background-color: #000;
}
```
Note: We use prepend period `.` before a class name to reference elements in style.css.

Now it may look like the whole of the board has had its background colour set to black, but it only looks like this because there is no spacing between the individual generator elements! To add spacing, add the following to the board element styling:

```
#board {
    <!-- ... -->
    gap: 1em;
}
```

Oh, it seems like we need to work on the arrangement of the generators! To do this, we can utilise CSS grid as follows:

```
#board {
    <!-- ... -->
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    <!-- ... -->
}
```

Now that we can see the generators, we can remove the board border styling `border: 0.25em solid #f7ed74;`, such that the board styling now is:

```
#board {
    height: 30em;
    width: 30em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1em;
}
```

To make the generators circular, we can introduce the `border-radius` property. We can also add a box shadow with a dark brown to make it look somewhat dimensional:

```
.generator {
    <!-- ... -->
    border-radius: 50%;
    box-shadow: inset 0em 1em 0em 0.25em #351506;
}
```

## Frosty Creature

To create our Frosty creature, we need to first create its element in a generator in index.html:

```
        <div class="generator">
            <div id="frosty-creature" class="frosty-creature">
                <div class="frosty-puddle"></div>
                <div class="frosty-body"></div>
                <div class="frosty-left-eye"></div>
                <div class="frosty-right-eye"></div>
                <div class="frosty-nose"></div>
            </div>
        </div>
```

We can then style these elements in the CSS as so:

```
.frosty-body {
    position: absolute;
    background-color: #fff;
    width: 5em;
    height: 5em;
    border-radius: 50%;
}

.frosty-right-eye {
    position: absolute;
    background-color: #000;
    width: 0.5em; 
    height: 0.5em;
    border-radius: 50%;
    margin-top: 1.5em;
    margin-left: 1em;
}

.frosty-left-eye {
    position: absolute;
    background-color: #000;
    width: 0.5em; 
    height: 0.5em;
    border-radius: 50%;
    margin-top: 1.5em;
    margin-left: 3em;
}

.frosty-nose {
    position: absolute;
    width: 0; 
    height: 0; 
    border-top: 0.3em solid transparent;
    border-bottom: 0.3em solid transparent; 
    border-right: 2em solid #aa211a;
    margin-top: 2.5em;
    margin-right: 2em;
}

.frosty-puddle {
    position: absolute;
    background-color: #D3D3D3;
    width: 5em;
    height: 1em;
    border-radius: 50%;
    margin-top: 5em;
}

.generator .frosty-creature {
    position: relative;
    top: 10%;
    left: 25%;
}
```

## Score

Now let's create a header where we can display the initial score on our game. Add the following to index.html after the board element.

```
  <body>
    <!-- ... -->
    <h2 class="score">Score: <span>000</span></h2>
  </body>
```
Note: `span` is an inbuilt HTML tag that is used to mark up a section of text, such that it can have individual styling, for example.

## Functionality

Alright, now we're ready to start adding JavaScript functionality to our game! For this section we will primarily be adding stuff to the main.js file.

### Random Generator Selection

First, let's create a constant to keep an array of all the generators in: 

```
const generators = [...document.querySelectorAll('.generator')]
```

Now we create a function that we will use to run the game:

```
function run() {

}
```

Since we would like for the Frosties to generate in random places on the game board, we need random number generation. For this add the following to the run function:

```
    const r = Math.floor(Math.random() * generators.length)
    const generator = generators[r]
```

We now know which generator the Frosty is going to appear in.

### Frosty Creature

Now, we need to extract the Frosty from index.html to main.js so that it can be added to different generators during runtime.

```
function run() {
    // ...
    const frostyCreature = document.createElement('div');
    frostyCreature.classList.add('frosty-creature');
    frostyCreature.innerHTML = `
        <div class="frosty-puddle"></div>
        <div class="frosty-body"></div>
        <div class="frosty-left-eye"></div>
        <div class="frosty-right-eye"></div>
        <div class="frosty-nose"></div>
    `
}
```

Note: Remember to remove the frosty-creature element and all of its child elements from index.html.

Now we can append the Frosty to the randomly selected generator:

```
function run() {
    // ...
    generator.appendChild(frostyCreature)
}
```

Your run function should currently look like this:

```
function run() {
    const r = Math.floor(Math.random() * generators.length)
    const generator = generators[r]

    const frostyCreature = document.createElement('div');
    frostyCreature.classList.add('frosty-creature');
    frostyCreature.innerHTML = `
        <div class="frosty-puddle"></div>
        <div class="frosty-body"></div>
        <div class="frosty-left-eye"></div>
        <div class="frosty-right-eye"></div>
        <div class="frosty-nose"></div>
    `

    generator.appendChild(frostyCreature)
}
```

### Scoring

We would like the score to increase when a Frosty is frozen (i.e clicked). To do this we would first need to grab the span within the score HTML element (as we need to edit this!) and create a constant for currentScore. These would go after the generators array at the top of the file.

```
const generators = [...document.querySelectorAll('.generator')]
const scoreElement = document.querySelector('.score span')
let currentScore = 0
// ...
```

Next we need to add an event listener to the frostyCreature variable. Within the callback function, we increase the score every time a Frosty is clicked:

```
frostyCreature.addEventListener('click', () => {
        currentScore++
        scoreElement.textContent = currentScore
    })
```

### Timing

Now we're going to set a timer for how long the Frosty creature can survive without melting completely... Let's say 500ms here:

```
    meltimer = setTimeout(() => {
        generator.removeChild(frostyCreature);
        run()
    }, 500)
```

You can toggle with this value to increase/decrease the difficulty of the game. And there we've done it!

![image](https://user-images.githubusercontent.com/68516952/204341792-029e19d1-9594-4213-a8ac-83a80213a3d6.png)

If you would like, you can play around with the CSS a bit more, customise the cursor or even get CSS animate to make the Frosties ease in and out! Now let's start saving these snowy beings before they defrost into a sad puddle of water!

# Credits:
[Angle Brace](https://www.youtube.com/watch?v=b20YueeXwZg)  
[Ania Kubow](https://www.youtube.com/watch?v=rJU3tHLgb_c)
