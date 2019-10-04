import { compareNumbers } from './compare-numbers.js';

//get DOM elements
let activePlay = document.getElementById('active-play');
let loser = document.getElementById('lose');
let winner = document.getElementById('win');
let checkGuess = document.getElementById('submit-guess');

//initialize state
let guessesRemaining = 4;

const getRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 20);
    return randomNumber;
};

const getGuess = () => {
    let userInput = document.getElementById('user-input');
    let userGuess = parseInt(userInput.value, 10);
    return userGuess;
};

//displaying results
const displayResults = (check) => {
    if (check === 0){
        winner.classList.remove('hidden');
        activePlay.classList.add('hidden');
        return;
    }
    else if (check === 1 && guessesRemaining !== 1){
        guessesRemaining--;
        const updatedHint = document.getElementById('hint');
        const message = (`Your guess of ${getGuess.value} is too high.  You have ${guessesRemaining} guesses remaining.`);
        updatedHint.textContent = message;

    }
    else if (check === -1 && guessesRemaining !== 1){
        guessesRemaining--;
        const updatedHint = document.getElementById('hint');
        const message = (`Your guess of ${getGuess} is too low.  You have ${guessesRemaining} guesses remaining.`);
        updatedHint.textContent = message;
    }

    else {
        // Loser sequence
        activePlay.classList.add('hidden');
        loser.classList.remove('hidden');
        return;
    }
};
const playRound = () => {
    const results = compareNumbers(getGuess(), getRandomNumber());
    displayResults(results);
};
checkGuess.addEventListener('click', playRound);



