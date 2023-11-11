// create a container for the grid
document.querySelector('#grid');

// create the grid
let manyBoxes = function() {
	for (let i = 0; i < 16; i++) {

		// create the grid
		const singleBox = document.createElement('div');
		singleBox.classList.add('singleBox');
		grid.appendChild(singleBox);

		// color the grid
			let colorBox = function() {
				let randomColor = Math.floor(Math.random()*16777215).toString(16);
				singleBox.style.backgroundColor = '#' + randomColor;
			}
			singleBox.addEventListener('mouseover', colorBox);
	}
}

manyBoxes();

// need to write a function that makes a square grid (ie 4 x 4 or 8 x 8) dependent upon user input
// first create a div that changes when hovered over with the mouse down to a black box

// Add the event listener for coloring the individual box

// let colorBox = function() {
// 	let randomColor = Math.floor(Math.random()*16777215).toString(16);
// 	singleBox.style.backgroundColor = '#' + randomColor;
// }
// singleBox.addEventListener('mouseover', colorBox);

// const singleBox = document.createElement('div');

// gridContainer.appendChild(singleBox);


