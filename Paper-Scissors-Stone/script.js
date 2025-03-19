const buttons = document.querySelectorAll("button")
const userScoreDiv = document.querySelector(".user-score div")
const computerScoreDiv = document.querySelector(".computer-score div")
const display = document.querySelector(".display")
let userScore = 0
let computerScore = 0

const choices = ['PAPER', 'SCISSORS', 'STONE']

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.textContent
        const computerChoice = getComputerChoice()
        const result = judge(computerChoice, userChoice)
        userScoreDiv.textContent = userScore
        computerScoreDiv.textContent = computerScore
        display.textContent = `You chose ${userChoice}, your opponent chose ${computerChoice}, ${result}!`
    })
})

function judge(computerChoice, userChoice) {
    if (computerChoice === userChoice) {
        console.log('Tie');
        return 'try again';
    }
    if ((computerChoice === 'STONE' && userChoice === 'PAPER') ||
        (computerChoice === 'PAPER' && userChoice === 'SCISSORS') ||
        (computerChoice === 'SCISSORS' && userChoice === 'STONE')
    ) {
        console.log('You win!');
        userScore++;
        return 'you win'
    } else {
        console.log('You lose!');
        computerScore++;
        return 'you lose'
    }

}
