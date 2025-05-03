"use strict";

const inputNumber = document.querySelector(".guess");
const buttonCheck = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const number = document.querySelector(".number");
const buttonAgain = document.querySelector(".again");
const body = document.querySelector("body");

let scoreFinal = 20;
let numberToGuess = Math.trunc(Math.random() * 20) + 1;

buttonCheck.addEventListener("click", function () {
  if (inputNumber.value == numberToGuess) {
    message.textContent = "🎉 Correct Number!";
    body.style.backgroundColor = "rgb(96, 179, 71) ";
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
      body.style.backgroundColor = "rgb(116, 28, 28)";
    }
  }
});

buttonAgain.addEventListener("click", function () {
  scoreFinal = 20;
  numberToGuess = Math.trunc(Math.random() * 20) + 1;
  message.textContent = "Start guessing...";
  number.textContent = "?";
  score.textContent = 20;
  body.style.backgroundColor = "#222";
});
