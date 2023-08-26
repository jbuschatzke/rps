let w = 0;
let l = 0;
let d = 0;

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
    playRound(playerChoice, computerChoice);
  }
}

game();

alert("You won " + w + " game(s), lost " + l + " game(s), and tied " + d + " game(s)!");