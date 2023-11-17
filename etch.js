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

function updateSize(newSize) {
  currentSize = newSize;
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
clearButton.onclick = () => makeGrid();

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

function activateButton(newMode) {
  if (currentMode === 'color') {
    colorButton.classList.remove('active');
  } else if (currentMode === 'classic') {
    classicButton.classList.remove('active');
  } else if (currentMode === 'erase') {
    eraseButton.classList.remove('active');
  }

  if (newMode === 'color') {
    colorButton.classList.add('active');
  } else if (newMode === 'classic') {
    classicButton.classList.add('active');
  } else if (newMode === 'erase') {
    eraseButton.classList.add('active');
  }
}

makeGrid(25);





























// // Prompt the user until a valid input is provided
// //   function userInputClick(){ 
// //     do {
// //     userInput = prompt('How many rows and columns would you like on your etch-a-sketch? Enter a number between 1 and 100.');
// // } while (!isValidInput(userInput));
// //   }

// // // Convert the input to a number
// // userInput = parseInt(userInput);

// // // Function to check if the input is valid
// // function isValidInput(input) {
// //     return !isNaN(input) && input >= 1 && input <= 100;
// // }

// let makeGrid = function() {
//   // Loop for rows
//     for (let i = 0; i < currentSize; i++) { 
//         const row = document.createElement('div');
//         row.classList.add('row');
//         grid.appendChild(row);
//   // Loop for columns
//     for (let j = 0; j < currentSize; j++) { 
//         const singleBox = document.createElement('div');
//         singleBox.classList.add('singleBox');
//         row.appendChild(singleBox);
//     }





// // let colorBox = function() {
// // 	if (isMouseDown) {
// //     let randomColor = Math.floor(Math.random()*16777215).toString(16);
// //     singleBox.style.backgroundColor = '#' + randomColor;
// // 	}};
        
// // 	singleBox.addEventListener('mouseover', colorBox);

// //   // Add mousedown event listener to each box individually
// // 	singleBox.addEventListener('mousedown', function() {
// // 	  isMouseDown = true;
// // 	});
	
// // 	// Add mouseup event listener to each box individually
// // 	singleBox.addEventListener('mouseup', function() {
// // 		isMouseDown = false;
// // 	});
	

// // 	let colorOnClick = function() {
// // 		let randomColor = Math.floor(Math.random() * 16777215).toString(16);
// // 		singleBox.style.backgroundColor = '#' + randomColor;
// //     singleBox.addEventListener('mouseDown', colorOnClick);
// // 	  singleBox.addEventListener('click', colorOnClick);
// // 	};
// // colorBox();
// manyBoxes();