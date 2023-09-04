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
    if (playerChoice === "rock" && computerChoice === "paper") {
        alert("You lose! Paper beats rock");
        l++;
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        alert("You win! Rock beats scissors");
        w++;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        alert("You win! Paper beats rock");
        w++;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        alert("You lose! Scissors beats paper");
        l++;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        alert("You lose! Rock beats scissors");
        l++;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        alert("You win! Scissors beats paper");
        w++;
    } else {
        alert("It's a draw!");
        d++;
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
