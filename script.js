"use strict";

const inputNumber = document.querySelector(".guess");
const buttonCheck = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const number = document.querySelector(".number");
const buttonAgain = document.querySelector(".again");

var scoreFinal = 20;
var numberToGuess = Math.floor(Math.random() * 21);

buttonCheck.addEventListener("click", function () {
  if (inputNumber.value == numberToGuess) {
    message.textContent = "🎉 Correct Number!";
    if (highscore.textContent < scoreFinal) highscore.textContent = scoreFinal;
    number.textContent = numberToGuess;
  } else {
    scoreFinal--;
    score.textContent = scoreFinal;
    if (scoreFinal > 0) {
      inputNumber.value > numberToGuess
        ? (message.textContent = "📈 Too High")
        : (message.textContent = "📉 Too Low");
    } else {
      message.textContent = "💥 You lost the game!";
      number.textContent = numberToGuess;
    }
  }
});

buttonAgain.addEventListener("click", function () {
  scoreFinal = 20;
  numberToGuess = Math.floor(Math.random() * 21);
  message.textContent = "Start guessing...";
  number.textContent = "?";
  score.textContent = 20;
});
