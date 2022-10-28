// prompt for user input
let choice = window.prompt('Rock / Paper / Scissors').toLowerCase();
choice[0].toUpperCase();

// generate a random choice for computer
const computerPlay = () => {
    let random = Math.round(Math.random() * 3);

    switch (random) {
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
    };
};

let computerScore = 0;
let playerScore = 0;
// play a hand
const playSingleHand = (playerSelection, computerSelection) => {
    let random = computerPlay();
    if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore++;
        console.log('You win! Scissors beats Paper!')
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore++;
        console.log('You lose! Rock beats Scissors!')
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore++;
        console.log('You lose! Paper beats Rock!')
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore++;
        console.log('You win! Rock beats Scissors!')
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore++;
        console.log('You win! Paper beats Rock!')
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore++;
        console.log('You lose! Scissors beats Paper!')
    } else playSingleHand(choice, random);
};

const checkForWinner = (playerScore, computerScore) => {
    if (computerScore > playerScore) console.log('compuer wins')
    else console.log('player wins')

    // if (playerScore === 5) console.log('player won')
    // else if (computerScore === 5) console.log('computer won')
}
// play 5 hands and determine winner
const game = () => {
    
    for (let i = 0; i < 5; i++) {
        playSingleHand(choice, computerPlay());
    };

    checkForWinner();
};

// calls
console.log(computerPlay());
console.log(playSingleHand('Rock', computerPlay()));
// console.log(game());
