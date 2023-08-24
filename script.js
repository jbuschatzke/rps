//Computer randomly chooses between Rock, Paper, Scissors
let computerChoice = "";

function getComputerChoice () {

    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (randomNumber <= 33) {
        computerChoice = "Rock";
    } else if (randomNumber <= 66) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
}

getComputerChoice();
//Player inputs Rock, Paper, or Scissors
//Code compares computer choice and player input to determine winner
//Print Win or Lose