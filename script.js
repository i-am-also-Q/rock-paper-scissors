//randomly return a rock, paper, or scissors value to determine the computer opponent's moves
//randomly generate one of three integers
//each integer corresponds to rock, paper, or scissors, like so:
//if the integer generated is 0, return rock
//if the integer generated is 1, return paper
//if the integer generated is 2, return scissors
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);

    let computerChoice;

    if (randomNum === 0) {
        computerChoice = "rock";
    } else if (randomNum === 1) {
        computerChoice = "paper";
    } else if (randomNum === 2) {
        computerChoice = "scissors";
    }

    return computerChoice;
}

//play a single round of RPS with two parameters: playerSelection and computerSelection
//first, prompt the player for a selection of rock, paper, or scissors
//then write if else statements to determine which values beat which
//write an else in case the player's input is invalid
//return the results
function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    let result;

    if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        result = "you lose";
    } else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors")
    ) {
        result = "you win";
    } else if (playerSelection === computerSelection) {
        result = "tie";
    } else {
        result = "oops";
    }

    return result;
}

//calls the playRound function to play five rounds while keeping score and then reports a winner at the end of the game
function game() {
    let player = 0;
    let computer = 0;
    let playerChoice;
    let computerChoice;

    for (let rounds = 0; rounds < 5; rounds++) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();

        console.log(computerChoice);

        let result = playRound(playerChoice, computerChoice);
        console.log(result);

        if (result === "you lose") {
            computer++;
        } else if (result === "you win") {
            player++;
        } else if (result === "tie") {
            computer++;
            player++;
        }
    }

    console.log(`Player: ${player} \nComputer: ${computer}`);

    if (player > computer) {
        console.log("You've won the game! Congrats!");
    } else if (player < computer) {
        console.log("I'm sorry, but you've lost the game. Try again.");
    } else {
        console.log("It's a tie!");
    }
}

game();
