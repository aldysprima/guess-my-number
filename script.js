'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const number = document.querySelector('.number');
const scores = document.querySelector('.score');
const body = document.querySelector('body');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// CHECK Button Functionality
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When There is no input
  if (!guess) {
    displayMessage('⛔ No Number!');
    // When Player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Answers🎉🎉');
    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Number is too High!' : 'Number is too Low!'
      );
      score--;
      scores.textContent = score;
    } else {
      displayMessage('You Lost The Game! 💥');
      scores.textContent = 0;
    }
  }
});

// AGAIN Button functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  scores.textContent = score;
  number.textContent = '?';
  document.querySelector('.guess').value = '';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
