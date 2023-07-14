let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

function playRound() {
    playerSelection = prompt('Choose "Rock", "Paper", or "Scissors"').toLowerCase();
    computerSelection = getComputerChoice();
    if      ((playerSelection === 'scissors' && computerSelection === 'paper') ||
             (playerSelection === 'paper' && computerSelection === 'rock') ||
             (playerSelection === 'rock' && computerSelection === 'scissors')) {
                 playerScore++;
                 console.log(`You: ${playerScore}   Computer: ${computerScore}`);
                 return `You win, ${playerSelection} beats ${computerSelection}!`;
    }
    else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
             (playerSelection === 'paper' && computerSelection === 'scissors') ||
             (playerSelection === 'scissors' && computerSelection === 'rock')) {
                 computerScore++;
                 console.log(`You: ${playerScore}   Computer: ${computerScore}`);
                 return `You lose, ${computerSelection} beats ${playerSelection}...`;
    }
    else if (playerSelection === computerSelection) {
                 return `Draw, ${playerSelection} ties with ${computerSelection}.`;
    }
    else
                 return `Sadly, ${playerSelection} is not a valid entry.`;
}

function game() {
    for (x = 0; x < 5; x++) {
        let gameResult = playRound(playerSelection,computerSelection);
        console.log(gameResult);
    } 
    console.log("Final Results: You: " + playerScore + "   Computer: " + computerScore);
    if (playerScore > computerScore) {
        console.log("You win the game!")
    } else if (playerScore < computerScore) {
        console.log("You lose the game...") 
    } else {
        console.log("It's a god damn tie mothafucka!")
    }
}

game();

//woooooo