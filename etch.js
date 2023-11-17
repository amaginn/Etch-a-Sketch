const defaultColor = '#C2E5D3';
const defaultMode = 'classic';
const defaultSize = 25;

let currentColor = defaultColor;
let currentMode = defaultMode;
let currentSize = defaultSize;

function updateColor(newColor) {
  currentColor = newColor;
}

function updateMode(newMode) {
  currentMode = newMode;
}

const grid = document.querySelector('#grid');
const colorButton = document.querySelector('#colorButton');
const eraseButton = document.querySelector('#eraseButton');
const classicButton = document.querySelector('#classicButton');
const gridSelect = document.querySelector('#gridSelect');
const clearButton = document.querySelector('#clearButton')

colorButton.onclick = () => updateMode('color');
eraseButton.onclick = () => updateMode('erase');
classicButton.onclick = () => updateMode('classic');
clearButton.onclick = () => makeGrid(25);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let makeGrid = function (userInput) {
  grid.innerHTML = ''; // Clear existing content

  for (let i = 0; i < userInput; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    grid.appendChild(row);

    for (let j = 0; j < userInput; j++) {
      const singleBox = document.createElement('div');
      singleBox.classList.add('singleBox');
      singleBox.addEventListener('mouseover', colorBox);
      singleBox.addEventListener('mousedown', colorBox);
      row.appendChild(singleBox);
    }
  }
  activateButton(currentMode);
};

let colorBox = function (e) {
  if (e.type === 'mouseover' && !mouseDown) return;
  
  if (currentMode === 'color') {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.backgroundColor = '#' + randomColor;
  } else if (currentMode === 'classic') {
    e.target.style.backgroundColor = '#a0c0af';
  } else if (currentMode === 'erase') {
    e.target.style.backgroundColor = '#C2E5D3';
  }
};

let updateGrid = function () {
  let userInput;
  do {
    userInput = prompt('How many rows and columns would you like on your etch-a-sketch? Enter a number between 1 and 100.');
  } while (!isValidInput(userInput));

  userInput = parseInt(userInput);

  function isValidInput(input) {
    return !isNaN(input) && input >= 1 && input <= 100;
  }

  makeGrid(userInput);
};

gridSelect.addEventListener('click', updateGrid);

colorButton.onclick = () => {
  updateMode('color');
  activateButton('color');
};

eraseButton.onclick = () => {
  updateMode('erase');
  activateButton('erase');
};

classicButton.onclick = () => {
  updateMode('classic');
  activateButton('classic');
};

clearButton.onclick = () => {
  makeGrid(25);
  updateMode('classic');
  activateButton('classic');
};

gridSelect.addEventListener('click', () => {
  updateGrid();
  activateButton('classic');
});

activateButton(currentMode);

function activateButton(newMode) {
  const buttons = [colorButton, eraseButton, classicButton];

  buttons.forEach(button => button.classList.remove('active'));

  const clickedButton = document.querySelector(`#${newMode}Button`);
  if (clickedButton) {
    clickedButton.classList.add('active');
  }
}

makeGrid(25);