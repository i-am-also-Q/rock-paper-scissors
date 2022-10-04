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
        computerChoice = "Rock";
    } else if (randomNum === 1) {
        computerChoice = "Paper";
    } else if (randomNum === 2) {
        computerChoice = "Scissors";
    }

    console.log(computerChoice);
}

getComputerChoice();
