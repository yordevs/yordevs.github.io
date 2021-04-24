---
slug: "/blog/Fight-Night-Shapes"
date: "2021-04-24"
title: "CSS Shapes - CSS Fight Night"
author: "Adam Barr"
tags: [fightnight, github, vscode, CSS, HTML, Shapes]
---

As the night of our CSS Fight Night approaches, you would be forgiven for wanting a leg up on the competition, fortunately for you we will be putting out a series of articles to help you prepare for this momentous occasion, and this, the third of these articles, is all about … shapes!

Fun fact, everything is made up of shapes! You may find that hard to believe, but next time you’re out and about, have a look around and you’ll see shapes everywhere! A house can be a square with a triangle on top, traffic lights are rectangles containing three circles, even squares themselves can be made up of two triangles! Shapes can be powerful tools themselves, but the skills you will learn by completing the challenges in our CSS Fight Night will (hopefully) put you in good stead to make any website look somewhat attractive.

This article will cover how to make the three key shapes you will need to complete our beginner CSS fight night, Squares, Circles, and Triangles. There will also be a follow up article giving you an overview of how to create some of the more complex shapes required for our experienced fight night challenges

# Squares

The `<div>` tag is one of the most common tags in web design, div is short for division, and divs are containers that allow us to layout our webpage and its contents, but more importantly for us, they are rectangles. We can create square using a div by setting it’s width and height to the same value (for example 30px), then setting the background color

CSS:

```
.Square {
	width: 50px;
	height: 50px;
	background-color: red;
}
```

HTML:

```
<div class=”Square”>
	Square div
</div>
```

# Circles

Circles are simply div elements with a border-radius property of 50% and equal widths and heights. For example:

CSS:

```
.Circle {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: red;
}
```

HTML:

```
<div class=”Circle”>
	Circle div
</div>
```

# Triangles

Triangles are difficult concept to explain, fortunately for me I don’t need to worry because CSS Tricks have made a brilliant demo as to why CSS triangles are triangles:

<iframe height="320" style="width: 100%;" scrolling="no" title="Animation to Explain CSS Triangles" src="https://codepen.io/chriscoyier/embed/lotjh?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/chriscoyier/pen/lotjh'>Animation to Explain CSS Triangles</a> by Chris Coyier 
  (<a href='https://codepen.io/chriscoyier'>@chriscoyier</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

As good as the demo may be, we don’t need to worry too much about how they work for the fight night, just about how to make them.

Triangles have three sides (if they didn’t, they wouldn’t be triangles), this means we need three borders, the triangle in the example below “points” up so the three borders we are concerned about are right, left, and top. The right and left borders are transparent, but together they set the width of the base of the triangle, below they both stretch out 100px from the center of the base, but they don’t have to be the same if you don’t want an isosceles/equilateral triangle. The top border sets the color of the triangle, in this case red, the length of the top border decides the height of the triangle, so the distance from the “point” to the base.

The best way to understand triangles is simply to have a play around with them, copy the code below and have a go at making different coloured and shaped triangles

CSS:

```
.Triangle {
  width: 0;
  height: 0;
  border-right: 100px solid transparent;
  border-left: 100px solid transparent;
  border-top: 100px solid wheat;
}
```

HTML:

```
<div class=”Triangle”>
	Triangle div
</div>
```

---

You should now be more than ready to take on our CSS Fight Night, remember we have some example challenges in the GitHub repository (the article on how to get them is [here](/blog/Fight-Night-Downloading-Template)).

We will also be releasing an article on how to make more advanced shapes ahead of the night, this will be extra preparation for anyone who wants to enter our "experienced" competition.

Thanks for reading and **GOOD LUCK!**
