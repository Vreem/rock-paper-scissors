
//  Step 2: Write the logic to get the computer choice.
//      -Create function getComputerChoice
//          -Create variable randomNumber, use Math.random * 3 to generate a random number 
//           between 0 and 3 and use Math.floor to round that number to the nearest integer.
//              -Create conditionals to return either Rock, Paper or Scissors if one of three 
//               numbers is returned.

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber == 0) {
            return "Rock";
        }
        else if (randomNumber == 1) {
            return "Paper";
        }
        else {
            return "Scissors";
        }
}
console.log(getComputerChoice());

//  Step 3: Write the logic to get the human choice.
//      -Create function getHumanChoice
//          -To get user input use a prompt
//              -User input must be capitalized at the first character


function getHumanChoice() {
    const userInput = prompt('choose either Rock Paper or Scissors');
        if (userInput === null) {
            return "You chose to run away";
        }
        else if (userInput == 'Rock') {
            return "Rock";
        }
        else if (userInput == 'Paper') {
            return "Paper";
        }
        else {
            return "Scissors";
        }
}
console.log (getHumanChoice());

//  Step 4: Declare the players score variables.
//      -Create two variables named humanScore and computerScore in the global scope
//          -Initialize those variables with the value of 0

let humanScore = 0;
let computerScore = 0;

//  Step 5: Write the logic to play a single round.
//     -Create a function named playRound with parameters (humanChoice and Computerchoice).
//        Use these parameters to take human and computer choices as arguments.
//         -Make param humanChoice case-insensitive so player capitalization does not matter.
//     -Let playRound function console.log a string representing the round winner.
//      ex. "You lose! Paper beats Rock!"
//    -Increment the humanScore or computerScore variable based on the round winner.

function playRound(humanChoice, computerChoice) {
    //WIN
    if (humanChoice == "Rock" && computerChoice == "Scissors"
        ||
        humanChoice == "Paper" && computerChoice == "Rock"
        ||
        humanChoice == "Scissors" && computerChoice == "Paper"
    ) {
        return "You win!";
    }
    //LOSE
    else if (humanChoice == "Rock" && computerChoice == "Paper"
        ||
            humanChoice == "Paper" && computerChoice == "Scissors"
        ||
            humanChoice == "Scissors" && computerChoice == "Rock"
    ) {
        return "You lose!";
    }
    //TIE
    else {
        return "It's a draw!";
    }
}

console.log(playRound());

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
