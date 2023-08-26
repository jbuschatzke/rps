function game(){

    //Loop the code 5 times to play 5 rounds total

  for (let i = 0; i < 5; i++){

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

    console.log(computerChoice);


//Player inputs Rock, Paper, or Scissors

    let playerChoice = getPlayerChoice();

    function getPlayerChoice() {

        let playerThrow = prompt("Throw Your Hand, Mortal");
        playerThrow = playerThrow.toLowerCase();

        if (playerThrow === "rock" || playerThrow === "paper" || playerThrow === "scissors") {
            return playerThrow;
        } else {
            alert("Invalid input! Try Again!");
            getPlayerChoice();
        }

    }

    //Evaluate winner

    function playRound(playerChoice, computerChoice) {
        if (playerChoice === "rock" && computerChoice === "paper") {
            alert("You lose! Paper beats rock");
        } else if (playerChoice === "rock" && computerChoice === "scissors") {
            alert("You win! Rock beats scissors");
        } else if (playerChoice === "paper" && computerChoice === "rock") {
            alert("You win! Paper beats rock");
        } else if (playerChoice === "paper" && computerChoice === "scissors") {
            alert("You lose! Scissors beats paper");
        } else if (playerChoice === "scissors" && computerChoice === "rock") {
            alert("You lose! Rock beats scissors");
        } else if (playerChoice === "scissors" && computerChoice === "paper") {
            alert("You win! Scissors beats paper");
        } else {
            alert("It's a draw!");
        }
    }
    playRound(playerChoice, computerChoice);
  }
}

game();