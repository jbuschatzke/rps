let w = 0;
let l = 0;
let d = 0;

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (randomNumber <= 33) {
        return "rock";
    } else if (randomNumber <= 66) {
        return "paper";
    } else {
        return "scissors";
    }   
}

function playRound(playerChoice, computerChoice) {
   const buttons = document.querySelectorAll("button"); 
   const displayResults = document.querySelector('#results');
   const displayWinner = document.querySelector('.message');
    if (playerChoice === "rock" && computerChoice === "paper") {
        displayWinner.textContent = "You lose! Paper beats rock";
        l++;
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        displayWinner.textContent ="You win this round! Rock beats scissors";
        w++;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        displayWinner.textContent ="You win this round! Paper beats rock";
        w++;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        displayWinner.textContent ="You lose this round! Scissors beats paper";
        l++;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        displayWinner.textContent ="You lose this round! Rock beats scissors";
        l++;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        displayWinner.textContent ="You win this round! Scissors beats paper";
        w++;
    } else {
        displayWinner.textContent = "It's a draw!";
        d++;
    }

    if (w < 5 && l < 5){
    displayResults.textContent = "You have won " + w + " games, you have lost " + l + " games, and there have been " + d + " draws.";
    } else if (w == 5 && l < 5) {
        displayWinner.textContent = "You won the game!";
        displayResults.textContent = "Congratulations!";
    } else {
        displayWinner.textContent = "You lost the game!";
        displayResults.textContent = "See you in hell!";
    }
}


const playerRock = document.querySelector('#rock');
playerRock.addEventListener('click', () => {
playerChoice = "rock";
computerChoice = getComputerChoice();
playRound(playerChoice, computerChoice);
});

const playerPaper = document.querySelector('#paper');
playerPaper.addEventListener('click', () => {
playerChoice = "paper";
computerChoice = getComputerChoice();
playRound(playerChoice, computerChoice);
});


const playerScissors = document.querySelector('#scissors');
playerScissors.addEventListener('click', () => {
playerChoice = "scissors";
computerChoice = getComputerChoice();
playRound(playerChoice, computerChoice);
});
