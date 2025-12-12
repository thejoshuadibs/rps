let playerScore = 0;
let computerScore = 0;
let winner = "It was a draw";

// Get User Choice
function getUserChoice() {
  const choice = prompt("Choose one: ROCK | PAPER | SCISSORS");
  choice.toLowerCase();
  if (choice != "rock" && choice != "paper" && choice != "scissors") {
    alert('Invalid Choice')
    return getUserChoice();
  }
  return choice;
}

// Get Computer Choice
function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
  return choice.toLowerCase();
}

// Computer Choices to Determine Winner
function determineWinner(user, computer) {
  if (user == computer) return "tie";
  if (
    (user == "rock" && computer == "scissors") ||
    (user == "paper" && computer == "rock") ||
    (user == "scissors" && computer == "paper")
  ) {
    playerScore += 1;
    return "win";
  }
  computerScore += 1;
  return "lose";
}

function displayResult(user, computer, result) {
  if (result == "tie")
    console.log(`You: ${user} \nMo: ${computer} \nResult: It's a tie`);
  else console.log(`You: ${user} \nMo: ${computer} \nResult: You ${result}`);
}

function playRound() {
  const user = getUserChoice();
  const computer = getComputerChoice();
  const result = determineWinner(user, computer);
  displayResult(user, computer, result);
}

function startGame() {
  console.log(`\n------------------------------------------
    \n⚔️ Welcome to Rock, Paper, Scissors: Console Clash! ⚔️
\n------------------------------------------
\nThis is a 5-round battle against Mo our pro bot.
\n\nEnter 'rock', 'paper', or 'scissors' when prompted.
\nLoading game engine...
\nThe game will start momentarily. Prepare your move!
\nGood luck, and may the best hand win!
\n------------------------------------------`);

  for (let i = 0; i < 5; i++) playRound();
  playerScore == computerScore
    ? (winner = "It was a draw")
    : playerScore > computerScore
    ? (winner = "You")
    : (winner = "Mo");

  console.log(`\n------------------------------------------\nGame Ended!\n------------------------------------------
`);
  console.log(
    `Your Score: ${playerScore}\nMo's Score: ${computerScore}\n\nWinner: ${winner}`
  );
}

startGame();
