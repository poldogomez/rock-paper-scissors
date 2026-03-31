// Declare player and computer score variables
let computerScore = 0;
let humanScore = 0;
let roundCounter = 0; // roundCounter displayed in playRound.

// create banner to show round and keep score
const heading = document.querySelector("#header");
    
    const displayTitle = document.createElement("h1");
        displayTitle.textContent = "Rock Paper Scissor";
    heading.appendChild(displayTitle);
    
    const instructions = document.createElement("p");
        instructions.textContent = "Press a button to begin round."
    heading.appendChild(instructions);

const banner = document.querySelector("#banner");
const displayRound = document.createElement("p");
const displayChoices = document.createElement("p");
const displayRoundWinner = document.createElement("p");
    displayRoundWinner.id = "round-winner";
const displayScore = document.createElement("p");
    displayScore.id = "display-score";
const declareWinner = document.createElement("span");
    declareWinner.id = "declare-winner";
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
 
    const spanExist = document.querySelector('span');
    if (spanExist) {
        banner.removeChild(declareWinner);
    };

    displayRound.textContent = 'Round ' + roundCounter; // see roundCounter in loop after playRound
    banner.appendChild(displayRound);
      
    displayChoices.textContent = 'You chose: ' + humanChoice + '   |   Computer chose: ' + computerChoice;
    banner.appendChild(displayChoices);
      
    if (humanChoice === computerChoice) {
        displayRoundWinner.textContent = "It's a tie!";
    } else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            ++computerScore;
            displayRoundWinner.textContent = "Paper beats rock. Computer wins!";
        } else if (computerChoice === 'scissors') {
            ++humanScore;
            displayRoundWinner.textContent = "Rock beats scissors. You win!";
        };   
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            ++computerScore;
            displayRoundWinner.textContent = "Scissors beats paper. Computer wins!";
        } else if (computerChoice === 'rock') {
            ++humanScore;
            displayRoundWinner.textContent = "Paper beats rock. You win!";
        };   
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            ++computerScore;
            displayRoundWinner.textContent = "Rock beats scissors. Computer wins!";
        } else if (computerChoice === 'paper') {
            ++humanScore;
            displayRoundWinner.textContent = "Scissors beats paper. You win!";
        }; 
      };
      
      banner.appendChild(displayRoundWinner);

      displayScore.textContent = 'Score: You: ' + humanScore + '   |   Computer: ' + computerScore;
      banner.appendChild(displayScore);
      
    };  

const container = document.getElementById("container");

const rockButton = document.createElement("button");
    rockButton.textContent = "Rock";
    rockButton.id = "rock";

const paperButton = document.createElement("button");
    paperButton.textContent = "Paper";
    paperButton.id = "paper";

const scissorsButton = document.createElement("button");
    scissorsButton.textContent = "Scissors";
    scissorsButton.id = "scissors";

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);

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
            // alert('You win the game!');
        } else {
            declareWinner.textContent = "The computer wins the game!";
            // alert('The computer wins the game.');
        };
        banner.appendChild(declareWinner);
    
        // reset score and counter
        roundCounter = 0;
        humanScore = 0;
        computerScore = 0;

        };
    });
});
