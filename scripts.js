const paperEl = document.getElementById('paper');
const rockEl = document.getElementById('rock');
const scissorsEl = document.getElementById('scissors');
playerSelection = '';

paperEl.addEventListener('click', () => {
  playerSelection = 'paper';
  step2();
});

scissorsEl.addEventListener('click', () => {
  playerSelection = 'scissors';
  step2();
});

rockEl.addEventListener('click', () => {
  playerSelection = 'rock';
  step2();
});

function step2() {
  console.log(playerSelection);
}
