// DOM MANIPULATION Visual Novel GAME

//When we click START
//Write "Once upon a time" into our story div

var name = prompt('What is your name?');
var like = prompt('What is the name of your crush?');

//audio
var justdoit = new Audio('audio/Justdoit.mp3')
var ohyeah = new Audio('audio/ohyeah.mp3')
var darkness = new Audio('audio/hellodarkness.mp3')
var violin = new Audio('audio/violin.mp3')
var huh = new Audio('audio/huh.mp3')
var gameover = new Audio('audio/gameover.mp3')
var pup = new Audio('audio/pup.mp3')
var aww = new Audio('audio/aww.mp3')
var romantic = new Audio('audio/romantic.mp3')
var boom = new Audio('audio/boom.mp3')
var hmm = new Audio('audio/hmm.mp3')
var derp = new Audio('audio/derp.mp3')
var heya = new Audio('audio/heya.mp3')
var alwayslove = new Audio('audio/alwayslove.mp3')
var yay = new Audio('audio/yay.mp3')

/* START STORY */
document.querySelector(".start-btn").addEventListener("click", function(){
  justdoit.play();

  // 1. Write the intro to our STORY
  document.querySelector(".story").innerHTML = "<p>Hello " + name + "! WELCOME TO YOUR LIFE! WHERE YOU MAKE YOUR <strong>OWN DECISIONS</strong> and <strong>LIFE CHOICES</strong>!!!<br><br> ARE YOU READY???</p>";

  // 2. Remove Start Button
  document.querySelector(".start-btn").classList.add("invisible");

  // 3. Show next button
  document.querySelector(".YEAH-btn").classList.remove("invisible");
  document.querySelector(".OFC-btn").classList.remove("invisible");
});

//functions are simply a list of commands to do

/* HELL YEAH STORY */
document.querySelector(".YEAH-btn").addEventListener("click", function(){
  justdoit.pause();
  ohyeah.play();
  // 1. Write the intro to our STORY
  document.querySelector(".story").innerHTML = "THAT'S THE SPIRIT!<br><br><img src ='images/ohyeah.gif'>";
  // 2. Remove Button
  document.querySelector(".YEAH-btn").classList.add("invisible");
  document.querySelector(".OFC-btn").classList.add("invisible");

  // 3. Show next button
  document.querySelector(".DAY-btn").classList.remove("invisible");
});

/* OF COURSE STORY */
document.querySelector(".OFC-btn").addEventListener("click", function(){
  justdoit.pause();
  derp.play();

  // 1. Write the intro to our STORY
  document.querySelector(".story").innerHTML = "THAT'S THE SPIRIT!<br><br><img src ='images/ofc.gif'>";

  // 2. Remove Button
  document.querySelector(".OFC-btn").classList.add("invisible");
  document.querySelector(".YEAH-btn").classList.add("invisible");

  // 3. Show next button
  document.querySelector(".DAY-btn").classList.remove("invisible");
});


/* DAY STORY */
document.querySelector(".DAY-btn").addEventListener("click", function(){
  ohyeah.pause();
  derp.pause();
  huh.play();
  // 1. Write the intro to our STORY
  document.querySelector(".story").innerHTML = "It's 8am in the morning, what do you want to do today?<br><br><img src ='images/morning.gif'>";

  // 2. Remove Button
  document.querySelector(".DAY-btn").classList.add("invisible");

  // 3. Show next button
  document.querySelector(".BAR-btn").classList.remove("invisible");
  document.querySelector(".GYM-btn").classList.remove("invisible");
});

/* BAR STORY */
document.querySelector(".BAR-btn").addEventListener("click", function(){
  huh.pause();
  pup.play();

  // 1. Write the intro to our STORY
  document.querySelector(".story").innerHTML = "Woah woah calm down there. The bar is not opened yet.<br><br>Just when you were about to leave, you saw a box next to the sidewalk that seemed to be moving... <br><br><img src ='images/box.jpg'><br><br>You walked over there and opened the box.<br><br><img src ='images/bb.jpg'><br><br>IT'S A PUPPY! WHAT ARE YOU GOING TO DO ABOUT IT?";

  // 2. Remove Button
  document.querySelector(".BAR-btn").classList.add("invisible");
  document.querySelector(".GYM-btn").classList.add("invisible");
  // 3. Show next button
  document.querySelector(".YES-btn").classList.remove("invisible");
  document.querySelector(".NO-btn").classList.remove("invisible");
});

/* Home STORY */
document.querySelector(".YES-btn").addEventListener("click", function(){
  pup.pause();
  aww.play();
  // 1. Write the intro to our STORY
  document.querySelector(".story").innerHTML = "AWW. YOU ARE A GOOD PERSON.<3 <br><br><img src='images/love.gif'><br><br> As you were walking down the road with the puppy in your arms, you saw " + like + " sitting on the bench and was reading a book.<br><br><img src ='images/inlove.gif'><br><br>Are you going to casually walk over to " + like + " or are you too scared?";

  // 2. Remove Button
  document.querySelector(".YES-btn").classList.add("invisible");
  document.querySelector(".NO-btn").classList.add("invisible");
  // 3. Show next button
  document.querySelector(".hehe-btn").classList.remove("invisible");
  document.querySelector(".su-btn").classList.remove("invisible");
});

/* GO OVER STORY */
document.querySelector(".hehe-btn").addEventListener("click", function(){

  // 1. Write the intro to our STORY
  document.querySelector(".story").innerHTML = "You decided that you did not want to be alone this year during Chirstmas... So you asked " + like + " to spend Christmas with you?<br><br>Where tho?<br><br><img src='images/nervous.gif'>";
  hmm.play();
  // 2. Remove Button
  document.querySelector(".hehe-btn").classList.add("invisible");
  document.querySelector(".su-btn").classList.add("invisible");
  // 3. Show next button
  document.querySelector(".date-btn").classList.remove("invisible");
  document.querySelector(".home-btn").classList.remove("invisible");
});

/* FLINCH STORY */
document.querySelector(".su-btn").addEventListener("click", function(){
  darkness.play();
  // 1. Write the intro to our STORY
  document.querySelector(".story").innerHTML = "LOL. WHY? <br><br> You have died alone.<br><br><img src ='images/ded.gif'><br><br><strong>GAME OVER</strong>";

  // 2. Remove Button
  document.querySelector(".hehe-btn").classList.add("invisible");
  document.querySelector(".su-btn").classList.add("invisible");
});

/* Leave STORY */
document.querySelector(".NO-btn").addEventListener("click", function(){
  gameover.play();
  pup.pause();

  // 1. Write the intro to our STORY
  document.querySelector(".story").innerHTML = "YOU ARE HEARTLESS. YOU WENT TO HELL.<br><br><img src='images/hell.gif'><br><br><strong>GAME OVER</strong>";

  // 2. Remove Button
  document.querySelector(".YES-btn").classList.add("invisible");
  document.querySelector(".NO-btn").classList.add("invisible");
});

/* GYM STORY */
document.querySelector(".GYM-btn").addEventListener("click", function(){
  huh.pause();
  heya.play();

  // 1. Write the intro to our STORY
  document.querySelector(".story").innerHTML = "VERY PRODUCTIVE. I AM PROUD OF YOU " + name + "!<br><br><img src ='images/gym.gif'><br><br>" + like + " seems to be at the gym today as well. Do you want to go talk to " + like + "?";

  // 2. Remove Button
  document.querySelector(".BAR-btn").classList.add("invisible");
  document.querySelector(".GYM-btn").classList.add("invisible");
  // 3. Show next button
  document.querySelector(".ok-btn").classList.remove("invisible");
  document.querySelector(".Nah-btn").classList.remove("invisible");
});

/* OK STORY */
document.querySelector(".ok-btn").addEventListener("click", function(){
  heya.pause();
  // 1. Write the intro to our STORY
  document.querySelector(".story").innerHTML = "As you tapped on " + like + "'s shoulder...<br><br>What gender do you like?";

  // 2. Remove Button
  document.querySelector(".ok-btn").classList.add("invisible");
  document.querySelector(".Nah-btn").classList.add("invisible");
  // 3. Show next button
  document.querySelector(".male-btn").classList.remove("invisible");
  document.querySelector(".female-btn").classList.remove("invisible");
});

/* MALE STORY */
document.querySelector(".male-btn").addEventListener("click", function(){
  // 1. Write the intro to our STORY
  document.querySelector(".story").innerHTML = "As you tapped on " + like + "'s shoulder...<br><br><img src ='images/smile.gif'><br><br>YOU ARE COMPLETELY CHARMED BY " + like + "!<br><br>WHAT ARE YOU GOING TO DO?";

  // 2. Remove Button
  document.querySelector(".male-btn").classList.add("invisible");
  document.querySelector(".female-btn").classList.add("invisible");
  // 3. Show next button
  document.querySelector(".contain-btn").classList.remove("invisible");
  document.querySelector(".heart-btn").classList.remove("invisible");
});


/* FEMALE STORY */
document.querySelector(".female-btn").addEventListener("click", function(){
  // 1. Write the intro to our STORY
  document.querySelector(".story").innerHTML = "As you tapped on " + like + "'s shoulder...<br><br><img src ='images/baba.gif'><br><br>YOU ARE COMPLETELY CHARMED BY " + like + "!<br><br>WHAT ARE YOU GOING TO DO?";

  // 2. Remove Button
  document.querySelector(".male-btn").classList.add("invisible");
  document.querySelector(".female-btn").classList.add("invisible");
  // 3. Show next button
  document.querySelector(".contain-btn").classList.remove("invisible");
  document.querySelector(".heart-btn").classList.remove("invisible");
});

/* Contain yourself STORY */
document.querySelector(".contain-btn").addEventListener("click", function(){

  // 1. Write the intro to our STORY
  document.querySelector(".story").innerHTML = "You decided that you did not want to be alone this year during Chirstmas... So you asked " + like + " to spend Christmas with you?<br><br>Where tho?<br><br><img src='images/nervous.gif'>";
  hmm.play();
  // 2. Remove Button
  document.querySelector(".contain-btn").classList.add("invisible");
  document.querySelector(".heart-btn").classList.add("invisible");
  // 3. Show next button
  document.querySelector(".date-btn").classList.remove("invisible");
  document.querySelector(".home-btn").classList.remove("invisible");
});

/* DATE STORY */
document.querySelector(".date-btn").addEventListener("click", function(){
  hmm.pause();
  alwayslove.play();
  // 1. Write the intro to our STORY
  document.querySelector(".story").innerHTML = "AWWWWW " + like + "agreed to go out with you!! <br><br><img src = 'images/aww.gif'>";

  // 2. Remove Button
  document.querySelector(".date-btn").classList.add("invisible");
  document.querySelector(".home-btn").classList.add("invisible");
  // 3. Show next button
  document.querySelector(".door-btn").classList.remove("invisible");
});

/* Door STORY */
document.querySelector(".door-btn").addEventListener("click", function(){
  alwayslove.pause();
  romantic.play();

  // 1. Write the intro to our STORY
  document.querySelector(".story").innerHTML = "You opened the door and saw " + like + " at your door.<br><br><img src = 'images/datenight.gif'><br><br>ARE YOU READY?";

  // 2. Remove Button
  document.querySelector(".door-btn").classList.add("invisible");
  // 3. Show next button
  document.querySelector(".christmas-btn").classList.remove("invisible");
  document.querySelector(".oof-btn").classList.remove("invisible");
});

/* oof STORY */
document.querySelector(".oof-btn").addEventListener("click", function(){
  romantic.pause();
  darkness.play();
  // 1. Write the intro to our STORY
  document.querySelector(".story").innerHTML = "I can't believe that you backed out at the last moment..<br><br>Oof Another lonely holiday.<br><br><img src = 'images/ded.gif'><br><br><strong>GAME OVER</strong>";

  // 2. Remove Button
  document.querySelector(".christmas-btn").classList.add("invisible");
  document.querySelector(".oof-btn").classList.add("invisible");
  // 3. Show next button
});

/* Chritsmas STORY */
document.querySelector(".christmas-btn").addEventListener("click", function(){
  romantic.pause();
  yay.play();
  // 1. Write the intro to our STORY
  document.querySelector(".story").innerHTML = "You and " + like + "had an wonderful date.<br><br><img src = 'images/lovee.gif'><br><br>You are never going to be alone on holidays no more my dear.<br><br><img src = 'images/congratulation.gif'><br><br>YOU HAVE WON THE GAME! WISHING YOU A VERY MERRY CHRISTMAS XX";

  // 2. Remove Button
  document.querySelector(".christmas-btn").classList.add("invisible");
  document.querySelector(".oof-btn").classList.add("invisible");
  // 3. Show next button
  document.querySelector(".PSYCH-btn").classList.remove("invisible");
});

/* PSYCH THE END */
document.querySelector(".PSYCH-btn").addEventListener("click", function(){
  yay.pause();
  boom.play();
  // 1. Write the intro to our STORY
  document.querySelector(".story").innerHTML = "I wish you all your dreams come true.<br><br>JK<br><br><img src = 'images/psych.gif'><br><br>THE END.";

  // 2. Remove Button
  document.querySelector(".PSYCH-btn").classList.add("invisible");
  // 3. Show next button
});

/* HOME STORY */
document.querySelector(".home-btn").addEventListener("click", function(){
  hmm.pause();
  darkness.play();
  // 1. Write the intro to our STORY
  document.querySelector(".story").innerHTML = like + " thought you wanted to Netflix and Chill.<br><br><img src ='images/huhh.gif'><br><br>You are spending Christmas alone.<br><br><strong>GAME OVER</strong>";

  // 2. Remove Button
  document.querySelector(".date-btn").classList.add("invisible");
  document.querySelector(".home-btn").classList.add("invisible");
});

/* Heart Explode STORY */
document.querySelector(".heart-btn").addEventListener("click", function(){
  violin.play();

  // 1. Write the intro to our STORY
  document.querySelector(".story").innerHTML = "<img src='images/explode.gif'><br><br>Sorry BOO BOO, your heart can't handle the love.<br><br>This is you right now.<br><br><img src= 'images/sorry.gif'><br><br><strong>GAME OVER</strong>";

  // 2. Remove Button
  document.querySelector(".contain-btn").classList.add("invisible");
  document.querySelector(".heart-btn").classList.add("invisible");
});

/* NAH STORY */
document.querySelector(".Nah-btn").addEventListener("click", function(){
  heya.pause();
  darkness.play();
  // 1. Write the intro to our STORY
  document.querySelector(".story").innerHTML = "LOL. WHY? <br><br> You have died alone.<br><br><img src ='images/ded.gif'><br><br><strong>GAME OVER</strong>";

  // 2. Remove Button
  document.querySelector(".ok-btn").classList.add("invisible");
  document.querySelector(".Nah-btn").classList.add("invisible");
});
