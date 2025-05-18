console.log("Hello World! It's time for Rock Paper Scissors!")
 
// Logic to get computer choice
// 1 = "rock", 2 = "paper", 3 = "scissors"
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

console.log(getComputerChoice());