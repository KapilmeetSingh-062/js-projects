let randomNum = parseInt(Math.random() * 100 + 1);
// console.log(randomNum);

const userInput = document.querySelector('#guessField');
const sumbitBtn = document.querySelector('#subt');
const prevGuess = document.querySelector('.guesses');
const guessRemain = document.querySelector('.lastResult');
const messageBox = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuessList = [];
let numOfGuess = 1;
let playGame = true;

// check if user can play the game
if (playGame) {
  sumbitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// validate the num is btw. 1 and 100
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Enter a valid number between 1 and 100');
  } else if (guess < 1) {
    alert('Enter a valid number between 1 and 100');
  } else if (guess > 100) {
    alert('Enter a valid number between 1 and 100');
  } else {
    prevGuessList.push(guess);
    if (numOfGuess === 10) {
      prevGuessAndRemain(guess);
      displayMessage(`Game Over. Correct Number was ${randomNum}`);
      endGame();
    } else {
      checkGuess(guess);
      prevGuessAndRemain(guess);
    }
  }
}

// check if the guess num is correct, higher or lower
function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage(`Congratulations! You guessed it right.`);
    endGame();
  } else if (guess > randomNum) {
    displayMessage(`Your number is higher`);
  } else if (guess < randomNum) {
    displayMessage(`Your number is lower`);
  }
}

// function to update prevGuess and guessRemain
function prevGuessAndRemain(guess) {
  userInput.value = '';
  prevGuess.innerHTML += `${guess}, `;
  guessRemain.innerHTML = `${10 - numOfGuess}`;
  numOfGuess++;
}

// display message on screen
function displayMessage(message) {
  messageBox.innerHTML = `<h2>${message}</h2s>`;
}

// end game function
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = 'new-game'>Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

// new game function
function newGame() {
  const newGameBtn = document.querySelector('#new-game');
  newGameBtn.addEventListener('click', function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuessList = [];
    numOfGuess = 1;
    prevGuess.innerHTML = '';
    guessRemain.innerHTML = `${11 - numOfGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
