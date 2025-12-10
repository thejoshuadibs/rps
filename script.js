// Get User Choice
function getUserChoice() {
    const choice = prompt("Choose one: ROCK | PAPER | SCISSORS")
    return choice.toLowerCase();
}

// Get Computer Choice
function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)]
    return choice.toLowerCase();
}

// Computer Choices to Determine Winner
function determineWinner(user, computer) {
    if (user == computer) return "tie" 
    if(user == "rock" && computer == "scissors" || user == "paper" && computer == "rock" || user == "scissors" && computer == "paper")
        return "win"
    return "lose"
}

function displayResult(user, computer, result) {
    if (result == "tie") 
        console.log(`You: ${user} \nMo: ${computer} \nResult: It's a tie`)
    else console.log(`You: ${user} \nMo: ${computer} \nResult: You ${result}`)
}


