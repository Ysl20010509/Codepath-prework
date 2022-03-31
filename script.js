//Global Variables
var pattern = [];
var patternLen = 5;
var progress = 0; 
var gamePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var tonePlaying = false;
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var mistakes = 0;
//Global Constant
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

function startGame()
{
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  mistakes = 0;
  //initialize a pattern
  for (let i=0; i<patternLen; i++)
    {
      pattern[i] = getRandomIntInclusive(1,6);
    }
  //swap start and stop
  
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame()
{
  //initialize game variables
  gamePlaying = false;
  
  
  //swap start and stop
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 480,
  6: 500
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}


// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn)
{
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn)
{
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  if (clueHoldTime > 300)
    {
      clueHoldTime -= 100;
    }
  
}

function loseGame(){
  if (mistakes >= 3)
    {
      stopGame();
      alert("Game Over. You lost.");
    }
  else
    {
      alert("You made " + mistakes + " mistakes");
    }
  
}

function winGame(){
  stopGame();
  alert("Congratulation. You won.")
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function guess(btn)
{
  console.log("user guessed: " + btn);
  if(!gamePlaying)
    {
      return;
    }
  
  if(pattern[guessCounter] == btn)
    {
      if(guessCounter == progress)
        {
          if(progress == pattern.length - 1)
            {
              winGame();
            }
          else
            {
              progress++;
              playClueSequence();
            }
        }
      else
        {
          guessCounter++;
        }
    }
  else
    {
      mistakes += 1;
      loseGame();
    }
}