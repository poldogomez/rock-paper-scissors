// Declare player and computer score variables
let computerScore = 0;
let humanScore = 0;
let roundCounter = 0; // roundCounter displayed in playRound.

// create banner to show round and keep score
const banner = document.querySelector("#banner");

const displayRound = document.createElement("p");
    displayRound.textContent = "Hello World! It's time for Rock Paper Scissors!";
banner.appendChild(displayRound);

const displayChoices = document.createElement("p");
const displayRoundWinner = document.createElement("p");
const displayScore = document.createElement("p");
const declareWinner = document.createElement("h2");

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
};

function playRound(humanChoice, computerChoice) {
 
    displayRound.textContent = 'Round ' + roundCounter; // see roundCounter in loop after playRound
    banner.appendChild(displayRound);
      
    displayChoices.textContent = 'You chose: ' + humanChoice + '; Computer chose: ' + computerChoice;
    banner.appendChild(displayChoices);
      
    if (humanChoice === computerChoice) {
        displayRoundWinner.textContent = "It's a tie!";
        banner.appendChild(displayRoundWinner);
    } else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            ++computerScore;
            displayRoundWinner.textContent = "Paper beats rock. Computer wins!";
            banner.appendChild(displayRoundWinner);
        } else if (computerChoice === 'scissors') {
            ++humanScore;
            displayRoundWinner.textContent = "Rock beats scissors. You win!";
            banner.appendChild(displayRoundWinner);
        };   
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            ++computerScore;
            displayRoundWinner.textContent = "Scissors beats paper. Computer wins!";
            banner.appendChild(displayRoundWinner);
        } else if (computerChoice === 'rock') {
            ++humanScore;
            displayRoundWinner.textContent = "Paper beats rock. You win!";
            banner.appendChild(displayRoundWinner);
        };   
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            ++computerScore;
            displayRoundWinner.textContent = "Rock beats scissors. Computer wins!";
            banner.appendChild(displayRoundWinner);
        } else if (computerChoice === 'paper') {
            ++humanScore;
            displayRoundWinner.textContent = "Scissors beats paper. You win!";
            banner.appendChild(displayRoundWinner);
        }; 
      };
      displayScore.textContent = 'Score - You: ' + humanScore + ', Computer: ' + computerScore;
      banner.appendChild(displayScore);
      
    };  
 

// add listeners for container with buttons for humanChoice
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let humanChoice = button.id;
    let computerChoice = getComputerChoice();
    
    roundCounter++;
    playRound(humanChoice, computerChoice); // call function that plays game

    if (humanScore == 5 || computerScore == 5) {
        if (humanScore > computerScore) {
            declareWinner.textContent = "You win the game!";
            banner.appendChild(declareWinner);
            // alert('You win the game!');
        } else {
            declareWinner.textContent = "The computer wins the game!";
            banner.appendChild(declareWinner);
            // alert('The computer wins the game.');
        };
    };

    });
});
