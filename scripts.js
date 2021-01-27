const paperEl = document.getElementById('paper');
const rockEl = document.getElementById('rock');
const scissorsEl = document.getElementById('scissors');
const step1El = document.getElementById('step1');
const step2El = document.getElementById('step2');
const resultEl = document.getElementById('result');
const playerSelectionEl = document.getElementById('playerSelection');
let playerSelection = '';
let playerComponent = '';

paperEl.addEventListener('click', () => {
  playerSelection = 'paper';
  playerComponent = '<paper-component></paper-component>';
  nextPage();
});

scissorsEl.addEventListener('click', () => {
  playerSelection = 'scissors';
  playerComponent = '<scissors-component></scissors-component>';
  nextPage();
});

rockEl.addEventListener('click', () => {
  playerSelection = 'rock';
  playerComponent = '<rock-component></rock-component>';
  nextPage();
});

function nextPage() {
  step1El.classList.add('hidden');
  step2El.classList.remove('hidden');
  resultEl.classList.add('hidden');

  playerSelectionEl.innerHTML = playerComponent;
}
