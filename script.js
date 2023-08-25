//Computer randomly chooses between Rock, Paper, Scissors
let computerChoice = getComputerChoice();

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

// console.log(computerChoice);

//Player inputs Rock, Paper, or Scissors

let playerChoice = getPlayerChoice();

function getPlayerChoice() {

    let playerThrow = prompt("Throw Your Hand, Mortal");
    playerThrow = playerThrow.toLowerCase();

    if (playerThrow === "rock" || playerThrow === "paper" || playerThrow === "scissors") {
        return playerThrow;
    } else {
        alert("Invalid input! Refresh and try again!")
    }

}

console.log(playerChoice);

//Code compares computer choice and player input to determine winner

function playRound(playerChoice, computerChoice) {
    
}

//Print Win or Lose