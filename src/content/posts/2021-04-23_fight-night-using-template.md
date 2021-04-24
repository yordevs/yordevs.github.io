---
slug: "/blog/Fight-Night-Using-Template"
date: "2021-04-23"
title: "Using the template - CSS Fight Night"
author: "Adam Barr"
tags: [fightnight, github, vscode, CSS, HTML]
---

In this article we will be working through and example of a challenge that may appear on our CSS Fight Night, going through the steps I recommend to complete the challenge, we will be replicating the following image:

<img src="https://i.imgur.com/5fyFjPn.png" alt="drawing" width="400"/>

This article assumes you have already downloaded the fight night template, for instruction on how to do this follow our tutorial blog [here](/blog/Fight-Night-Downloading-Template)

# 1. Where to put the code

If you look at the HTML template, you will see that there are lots of what we call “divs”, divs (short for HTML Content Division element) are containers for the content of our code, they can help us lay out text, images, tables, and even contain other divs themselves. We can also change the look of these divs using CSS, for example by changing the color, shape, our outline. This is how we will be creating our CSS “Art”.

You should put your HTML Code inside the div with the relevant id tag for the challenge, for example the code for challenge 1 will go inbetween the following div tags:

```
<div class="Challenge-Holder" id="Challenge-1">
	<!-- CODE GOES HERE -->
</div>

```

The CSS should go inside the index.css file, whilst it doesn’t matter where exactly in the file it goes, it is useful to keep our code looking clean and organised, for this reason we have split up the CSS file into sections using comments. I recommend keeping the relevant code within these pre laid out sections.

# 2. Create the squares using divs

The image contains 4 squares, we can replicate these using divs. We could create 4 divs, one for each square, but remember the challenge container is a div itself, so we can replicate the image by creating two squares of one colour, and setting the background image to the other colour.

The challenge container, containing the divs will look like so:

```
<div class="Challenge-Holder" id="Challenge-1">
  <div></div>
  <div></div>
</div>
```

# 3. Add Classes to the divs

To style the divs, we must first add a class to them, the browser will find this class in the CSS to know what the div looks like, how it is positioned, how it behaves, and ultimately how it should be displayed on the screen.

We can add classes to our divs like so:

```
<div class="Challenge-Holder" id="Challenge-1">
  <div class="Example-Square-Top-Left"></div>
  <div class="Example-Square-Bottom-Right"></div>
</div>
```

We have given the divs easy to read class to make it obvious to ourselves and anyone reading the code what they are for.

# 4. Add the classes to the CSS

We now have to put these classes inside our CSS file so we can say what the divs should look like. Remember, whilst they can go anywhere in the CSS file it’s a good idea to keep our code organised, for this reason we’ll be putting them in the section marked out for “Challenge 1”, as this is the id of the challenge holder div we used.

The CSS code with the new classes will look like this.

```
/_--CHALLENGE 1 STYLING _/
/_ Please put all the styling for challenge 1 here _/

#Challenge-1 {
}

.Example-Square-Top-Left {
}

.Example-Square-Bottom-Right {
}
```

# 5. Create the squares

We now actually have to use these classes to tell the browser what we want the divs to look like, I have chosen the classnames to make it clear I am creating to top left and bottom right squares. To list the attributes of these squares, we can see that they are both:

- Brown
- 50% of the container wide
- 50% of the container tall

We also know that to recreate the image, the background of the container must be pink.

Translated in to CSS, these attributes look like:

```
/*--CHALLENGE 1 STYLING */
/* Please put all the styling for challenge 1 here */
#Challenge-1 {
background-color: pink;
}

.Example-Square-Top-Left {
 width: 50%;
 height: 50%;
 background-color: brown;
}

.Example-Square-Bottom-Right {
 width: 50%;
 height: 50%;
 background-color: brown;
}

```

This will create an image that looks like so:

<img src="https://i.imgur.com/JxAj2Sy.png" alt="drawing" width="400"/>

# 6. Position the squares

The final step will be to position the bottom right square, at the moment it is directly below the top left square. The easiest way to do this is to:

1. Make the position of the div “absolute”, meaning it can be positioned wherever you want without being affected by other divs.
2. Move it to the right, I did this by setting the amount of space to the right of the div to 0px,

It is also good practice to make sure the div stays on the bottom of the container, I did this by setting the amount of space between the bottom of my div and the bottom of the container it’s in to 0px.

Translated into css is, these steps looks like so:

```
/*--CHALLENGE 1 STYLING */
/* Please put all the styling for challenge 1 here */
#Challenge-1 {
 background-color: pink;
}

.Example-Square-Top-Left {
 width: 50%;
 height: 50%;
 background-color: brown;
}

.Example-Square-Bottom-Right {
 position: absolute;
 width: 50%;
 height: 50%;
 background-color: brown;
 right: 0px;
 bottom: 0px;
}
```

If you have successfully followed along with the steps you should have recreated the image, if you have any questions or problems feel free to message us, either using our [slack](https://yordevs.slack.com), or directly on [facebook](https://www.facebook.com/yordevs), [instagram](https://instagram.com/yordevs), or by [email](mailto:yordevs@yusu.org)

---

You should now be ready to check out our next article on basic shaped [here](/blog/Fight-Night-Shapes).

I have created some demo challenges and added them to a folder “Warm Up Challenges”, on the github repo, if you have properly pulled the repo they should also be on your machine.

If you want to get some more practice in before the big night, have a go at these and you should be more than ready to take on our beginner challenges.
