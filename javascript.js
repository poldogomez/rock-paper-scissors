console.log("Hello World! It's time for Rock Paper Scissors!")
 
// Declare player and computer score variables
let computerScore = 0;
let humanScore = 0;

// console.log(computerScore + " " + humanScore);

// Logic to get computer choice
// Choices are: 1 = "rock", 2 = "paper", 3 = "scissors"
// Store result in computerChoice

function getComputerChoice() {
    let computerChoice = null;
    let randomNumber = Math.floor(Math.random() * 3 + 1); // returns random whole number > 0 and <= 3
    switch (randomNumber) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors"
            break;
    }
    return computerChoice;
}

// Logic to get human choice
// Prompt user to input choice "rock", "paper", or "scissors"
// Store result in humanChoice

function getHumanChoice() {
    let humanChoice = prompt('Type "rock" or "paper" or "scissors.');
    return humanChoice.toLowerCase(); // converts user text to all lower case
}

// Logic to play a single round.
// Get human and computer choices.
// If humanChoice = computerChoice, 
//      declare a tie and do not increment score.

// Else if humanChoice = 'rock' 
//      If computerChoice = 'paper', 
//          declare computer winner, 
//          increment computerScore by 1.
//      Else if computerChoice = 'scissors', 
//          declare human winner, 
//          increment humanScore by 1.

// Else if humanChoice = 'paper'
//      If computerChoice = 'scissors', 
//          declare computer winner, 
//          increment computreScore by 1.
//      Else if computerChoice = 'rock', 
//          declare human winner, 
//          increment humanScore by 1.

// Else if humanChoice = 'scissors'
//      If computerChoice = 'rock', 
//          declare computer winner, 
//          increment computerScore by 1.
//      Else if computerChoice = 'paper', 
//          declare human winner, 
//          increment humanScore by 1.

function playGame() {

    function playRound(humanChoice, computerChoice) {
      console.log('*** Round ' + roundCounter + ' ***'); // see roundCounter in loop after playRound
      console.log('You chose: ' + humanChoice + '; Computer chose: ' + computerChoice);
      if (humanChoice === computerChoice) {
        console.log("It's a tie!");
      } else if (humanChoice === 'rock') {
            if (computerChoice === 'paper') {
                ++computerScore;
                console.log("Computer wins! Paper beats rock.");
            } else if (computerChoice === 'scissors') {
                ++humanScore;
                console.log("You win! Rock beats scissors.");
            }   
      } else if (humanChoice === 'paper') {
            if (computerChoice === 'scissors') {
                ++computerScore;
                console.log("Computer wins! Scissors beats paper.");
            } else if (computerChoice === 'rock') {
                ++humanScore;
                console.log("You win! Paper beats rock.");
            }   
      } else if (humanChoice === 'scissors') {
            if (computerChoice === 'rock') {
                ++computerScore;
                console.log("Computer wins! Rock beats scissors.");
            } else if (computerChoice === 'paper') {
                ++humanScore;
                console.log("You win! Scissors beats paper.");
            } 
      }
      console.log('Score - You: ' + humanScore + ', Computer: ' + computerScore);
    }  

    // These consts and playRound will be called from within playGame
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

}

// To play 5 rounds, loop playGame 5x


let roundCounter = 0; // roundCounter displayed in playRound.
while (roundCounter < 5) {
    roundCounter++; // this is the round counter
    playGame();
} 

// Check to see who has the highest score then declare the winner.
if (humanScore > computerScore) {
    console.log('You win!');
} else if (computerScore > humanScore) {
    console.log('The computer wins.');
} else {
    console.log('Tie game!');
}  
