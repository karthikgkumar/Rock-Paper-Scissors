
let totalScore = { playerChoice: 0, computerChoice: 0 };
function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  let randomChoice = Math.floor(Math.random() * choice.length);
  return choice[randomChoice];
}
function getResult(playerChoice, computerChoice) {
  let score = 0;
  if (playerChoice == computerChoice) {
    return score;
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score = 1;
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else {
    score = -1;
  }
  return score;
}
function showResult(score, playerChoice, computerChoice) {
  let result = document.getElementById("result");
  switch (score) {
    case -1:
      result.innerText = `You Lost!`;
      break;
    case 0:
      result.innerText = `This is Draw!`;
      break;
    case 1:
      result.innerText = `You Won!`;
      break;
  }
  let playerScore = document.getElementById("player-score");
  let hands = document.getElementById("hands");
  playerScore.innerText = `Your total score: ${totalScore["playerChoice"]}`;
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`;
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  console.log({ computerChoice });
  let score = getResult(playerChoice, computerChoice);
  totalScore["playerChoice"] += score;
  showResult(score, playerChoice, computerChoice);
}

function playGame() {
  const rpsButtons = document.querySelectorAll(".rpsButton");
  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => {
      onClickRPS(rpsButton.value);
    };
  });
  let endButton = document.getElementById('endGameButton')
  endButton.onclick = ()=>{
      endGame()
  }

}

function endGame() {
  let result = document.getElementById("result");
  let playerScore = document.getElementById("player-score");
  let hands = document.getElementById("hands");
  playerScore.innerText = "";
  hands.innerText = "";
  result.innerText = "";
}

playGame();
