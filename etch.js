let userInput;

// Prompt the user until a valid input is provided
do {
    userInput = prompt('How many rows and columns would you like on your etch-a-sketch? Enter a number between 1 and 100.');
} while (!isValidInput(userInput));

// Convert the input to a number
userInput = parseInt(userInput);

// Function to check if the input is valid
function isValidInput(input) {
    return !isNaN(input) && input >= 1 && input <= 100;
}

let manyBoxes = function() {
  // Loop for rows
    for (let i = 0; i < userInput; i++) { 
        const row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
  // Loop for columns
    for (let j = 0; j < userInput; j++) { 
        const singleBox = document.createElement('div');
        singleBox.classList.add('singleBox');
        row.appendChild(singleBox);

  // color the grid
     let colorBox = function() {
					if (isMouseDown) {
          let randomColor = Math.floor(Math.random()*16777215).toString(16);
            singleBox.style.backgroundColor = '#' + randomColor;
					}
        };
        
				singleBox.addEventListener('mouseover', colorBox);

				         // Add mousedown event listener to each box individually
								 singleBox.addEventListener('mousedown', function() {
									isMouseDown = true;
							});
	
							// Add mouseup event listener to each box individually
							singleBox.addEventListener('mouseup', function() {
									isMouseDown = false;
							});
	

					let colorOnClick = function() {
						let randomColor = Math.floor(Math.random() * 16777215).toString(16);
						singleBox.style.backgroundColor = '#' + randomColor;
        };
			singleBox.addEventListener('mouseDown', colorOnClick);
  	}  
	}
};
manyBoxes();


