const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const choices = ['PAPER', 'SCISSOR', 'STONE', 'QUIT']

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

function judge(computerChoice, userChoice) {
    if (computerChoice === userChoice) {
        console.log('Tie');
        return;
    }
    if ((computerChoice === 'STONE' && userChoice === 'PAPER') ||
        (computerChoice === 'PAPER' && userChoice === 'SCISSOR') ||
        (computerChoice === 'SCISSOR' && userChoice === 'STONE')
    ) {
        console.log('You win!');
    } else {
        console.log('You lose!');
    }
}

function playGame() {
    rl.question("This is Paper-Scissor-Stone game. Please enter 'PAPER', 'SCISSOR', 'STONE', or 'QUIT' to exit: ", (userInput) => {
        const userChoice = userInput.toUpperCase();

        if (userChoice === 'QUIT') {
            console.log('Goodbye!');
            rl.close();
            return;
        }

        if (!choices.includes(userChoice)) {
            console.log('Invalid input. Please try again!')
            playGame();
            return;
        }
        const computerChoice = getComputerChoice();
        console.log(`You chose ${userChoice} and the computer chose ${computerChoice}.`);
        judge(computerChoice, userChoice);
        playGame();
    });
}

playGame();