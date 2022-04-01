# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **NAME**

Time spent: **#** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn
 a
The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

Game Button Behavior & More than 4 game button:
![](http://g.recordit.co/hHywWyow2q.gif)
Start/End Button Behavior:
![](http://g.recordit.co/1M03iV9NzV.gif)
Losing a Game & give 3 strikes:
![](http://g.recordit.co/lSiWmOuEad.gif)
Winning a Game & Speed up:
![](http://g.recordit.co/07AenNu9NG.gif)
Random Secret Pattern:
![](http://g.recordit.co/zXbMu4Su2T.gif)
## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

[The only outside resource I used in this project is the getRandomIntInclusive function that was used to implement the optional feature of making random patterns.
https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

[The first challenge that I met in this submission is when I implement my guess function, where I need to make a conditional statement of progress == pattern.length-1. Since I was not familiar with javascript, I used length() instead of length, treating it as a function. Then I found out that the function wasn't working as I expected, and I step by step went over the logistics to make sure I had the correct structure, then I suspected that it was the length() and I searched it online and found out it is a property in javascript instead of a function, and fixed the issue.

Another problem that I was facing happened when I implemented the optional random pattern feature, and I found that application only generates a pattern and make sound when I clicked start and stop one time, and nothing would happen when I first click on start after I refresh the page. I didn't think it was an issue and thought it was just a lagging issue of Glitch until when I need to make the GIFs and put the preview to the website view, and the problem still occurs. Then I started to check my code, trying to remember when was this phenomenom start to happen. Luckily, I found out that I put the forloop of generating the random pattern in my StopGame function instead of StartGame, which made the game only start to work after the "Stop" button is clicked one time. I moved my forloop to where it belongs and fixed the issue.

Lastly, when I was trying to record my GIFs, I didn't click on the Link of Recordit and searched it on Google, which led me to the wrong site and downloaded a wrong software. I realized it as soon as I opened the software and deleted it immediately, and found the link of the real Recordit on the prework website and successfully recorded the GIFs.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

[A question that really came up to me during my completion of this submission is ]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[YOUR ANSWER HERE]



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
