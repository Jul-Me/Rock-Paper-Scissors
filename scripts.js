const paperEl = document.getElementById('paper');
const rockEl = document.getElementById('rock');
const scissorsEl = document.getElementById('scissors');
const step1El = document.getElementById('step1');
const step2El = document.getElementById('step2');
const resultEl = document.getElementById('result');
const playerSelectionEl = document.getElementById('playerSelection');
const loadingEl = document.getElementById('loading');
const houseSelectionEl = document.getElementById('houseSelection');
const paperComponent = '<paper-component></paper-component>';
const scissorsComponent = '<scissors-component></scissors-component>';
const rockComponent = '<rock-component></rock-component>';
let playerSelection = '';
let playerComponent = '';

paperEl.addEventListener('click', () => {
  playerSelection = 'paper';
  playerComponent = paperComponent;
  nextPage();
});

scissorsEl.addEventListener('click', () => {
  playerSelection = 'scissors';
  playerComponent = scissorsComponent;
  nextPage();
});

rockEl.addEventListener('click', () => {
  playerSelection = 'rock';
  playerComponent = rockComponent;
  nextPage();
});

function nextPage() {
  step1El.classList.add('hidden');
  step2El.classList.remove('hidden');
  resultEl.classList.add('hidden');

  playerSelectionEl.innerHTML = playerComponent;

  setTimeout(finalPage, 1000);
}

function finalPage() {
  loadingEl.classList.add('hidden');

  getHouseSelection();
}

function getHouseSelection() {
  const arr = [paperComponent, scissorsComponent, rockComponent];

  let random = Math.random();
  random *= arr.length;
  const index = Math.floor(random);

  houseSelectionEl.innerHTML = arr[index];
}
