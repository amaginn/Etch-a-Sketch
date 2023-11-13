let userInput = prompt('How many rows and columns would you like on your etch-a-sketch?')


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
          let randomColor = Math.floor(Math.random()*16777215).toString(16);
            singleBox.style.backgroundColor = '#' + randomColor;
            }
             singleBox.addEventListener('mouseover', colorBox);
        }
  }  
}
manyBoxes();


