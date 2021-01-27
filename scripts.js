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
const resultTextEl = document.getElementById('resultText');
let playerSelection = '';
let playerComponent = '';
let houseSelection = '';

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

  playerSelectionEl.innerHTML = playerComponent;

  setTimeout(nextStep, 1000);
}

function nextStep() {
  loadingEl.classList.add('hidden');

  getHouseSelection();

  houseSelectionEl.classList.add('flash-effect');
  playerSelectionEl.classList.add('flash-effect');

  setTimeout(finalPage, 500);
}

function finalPage() {
  houseSelectionEl.classList.remove('flash-effect');
  playerSelectionEl.classList.remove('flash-effect');
  resultEl.classList.remove('hidden');

  resultTextEl.innerHTML = getPlayerResult();
}

function getHouseSelection() {
  const arr = [paperComponent, scissorsComponent, rockComponent];
  const stringArr = ['paper', 'scissors', 'rock'];

  let random = Math.random();
  random *= arr.length;
  const index = Math.floor(random);

  houseSelectionEl.innerHTML = arr[index];
  houseSelection = stringArr[index];
}

function getPlayerResult() {
  if (houseSelection === 'paper') {
    if (playerSelection === 'rock') {
      return 'You Lose';
    } else if (playerSelection === 'scissors') {
      return 'You Win';
    } else {
      return 'Draw';
    }
  }

  if (houseSelection === 'scissors') {
    if (playerSelection === 'rock') {
      return 'You Win';
    } else if (playerSelection === 'paper') {
      return 'You Lose';
    } else {
      return 'Draw';
    }
  }

  if (houseSelection === 'rock') {
    if (playerSelection === 'scissors') {
      return 'You Lose';
    } else if (playerSelection === 'paper') {
      return 'You Win';
    } else {
      return 'Draw';
    }
  }

  return '';
}
