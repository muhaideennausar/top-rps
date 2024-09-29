function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function individualRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function mainGame() {
    let playerScore = 0;
    let computerScore = 0;
    const validChoices = ['rock', 'paper', 'scissor'];

    for (let i = 0; i < 5; i++) {
        let playerSelection = '';

        while (!validChoices.includes(playerSelection)) {
            playerSelection = prompt("Enter your choice: rock, paper, or scissor").toLowerCase();
            if (!validChoices.includes(playerSelection)) {
                alert("Invalid choice! Please enter 'rock', 'paper', or 'scissor'.");
            }
        }

        const computerSelection = getComputerChoice();
        const result = individualRound(playerSelection, computerSelection);

        console.log(`Round ${i + 1}:`);
        console.log(`Player chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log(result);

        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log(`You win the game! Final Score - Player: ${playerScore}, Computer: ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lose the game! Final Score - Player: ${playerScore}, Computer: ${computerScore}`);
    } else {
        console.log(`It's a tie! Final Score - Player: ${playerScore}, Computer: ${computerScore}`);
    }
}

document.getElementById('startGameBtn').addEventListener('click', function () { mainGame() });
