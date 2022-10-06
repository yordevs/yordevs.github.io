---
slug: "/projects/yordle"
date: "2022-06-27"
title: "Yordle"
preview: "../../images/Projects/Yordle/preview.png"
client: "Yordevs"
description: "After the rise in popularity of 'Wordle', we created a clone of the game where every answer was in some way related to York"
lead: "Adam Barr"
developers: ["Ben Silverman", "Harry Wickham"]
link: "https://yordle.co.uk"
---

---

# Yordle

Wordle took the internet by storm over the first few months of 2022, whilst the idea behind the game was easy to understand, completing a wordle provided a sense of accomplishment and pride you couldn't help but show off to your friends and family. It was a perfect mix for a viral game.

Here at Yordevs we are not above jumping on a bandwagon, and as multiple wordle clones started putting their own new twist on the game, we wanted to get involved. It didn't take much imagination to decide that our spin on wordle was going to be making all the answers York related... oh and replacing the squares with ducks when you share your results.

Yordle uses the basic create-react-app framework, we decided we didn't need to use any addional frameworks on top of this as the site was going to be a single page application. We decided that we didn't want to store the answer in the users' browser before they had figured it out, so all answer calls are made to a remote heroku server which responds with the result of the guess, the answer is only sent after the 6th guess.

Local storage is used to allow users to return every day and keep track of their scores, as well as to prevent a user from being able to start their guesses again by refreshing the page. The browser's local storage is a completely client side solution that does not interfere with a user's experience on any other sites, therefore we also did not have to worry about GDPR compliance.

There are still some bugs to iron out with yordle, if you want to help us out with that you can pick one up at <https://github.com/yordevs/yordle/issues>
  
If you want to learn more about how we made this site or find out how to make a website like it yourself, join our discord to say hello and find out more about what we’re up to: <https://discord.gg/j8fbqEP2TD> 
