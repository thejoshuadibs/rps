let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const computerPossibleChoices = ['Rock', 'Paper', 'Scissors'];
  const computerChoice = computerPossibleChoices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

const getPlayerChoice = function () {
  const playerInput = prompt(
    'Choose One: (R / P / S)\nR - Rock\nP - Paper\nS - Scissors'
  ).toLowerCase();

  const playerPossibleChoices = {
    r: 'Rock',
    p: 'Paper',
    s: 'Scissors'
  };

  const playerChoice = playerPossibleChoices[playerInput];
  return playerChoice;
};

function playRound(
  playerChoice = getPlayerChoice(),
  computerChoice = getComputerChoice()
) {
  console.log(`You: ${playerChoice} | Computer: ${computerChoice}`);

  if (playerChoice == 'Rock' && computerChoice == 'Rock') {
    console.log('Tie: Both choices are the same');console.log(" ")
  } else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
    console.log('Loss: Paper beats rock');console.log(" ")
    computerScore += 1;
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    console.log('Win: Rock beats scissors');console.log(" ")
    playerScore += 1;
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    console.log('Win: Paper beats rock');console.log(" ")
    playerScore += 1;
  } else if (playerChoice == 'Paper' && computerChoice == 'Paper') {
    console.log('Tie: Both choices are the same');console.log(" ")
  } else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
    console.log('Loss: Scissors beats paper');console.log(" ")
    computerScore += 1;
  } else if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
    console.log('Loss: Rock beats scissors');console.log(" ")
    computerScore += 1;
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    console.log('Win: Scissors beats paper');console.log(" ")
    playerScore += 1;
  } else if (playerChoice == 'Scissors' && computerChoice == 'Scissors') {
    console.log('Tie: Both choices are the same');console.log(" ")
  }
}

function playGame() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
}

playGame();

const stats = {
  player: playerScore,
  computer: computerScore
};

function getResult() {
  if (computerScore > playerScore) {
    return 'You Lose!';
  } else {
    return 'You Win!';
  }
}

console.log(`Game Over: ${getResult()}`);

console.table(stats);
