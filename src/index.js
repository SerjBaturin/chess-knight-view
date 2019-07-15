/* eslint-env browser */
/* eslint-disable no-param-reassign */
/* eslint-disable no-loop-func */

// The knightMoves function returns possible moves of a chess knight in the allMoves array
// Movement is determined by counting the cells of the field along the 'X' and 'Y' axes
// from the position of the figure
const knightMoves = (now) => {
  // Define an array for all possible moves
  const allMoves = [];

  // Define an array of movements along the 'X' axis
  const xMoves = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  // Determine the coordinates of the knight along the 'X' axis
  const X = xMoves.indexOf(now[0]) + 1;

  // Determine the coordinates along the 'Y' axis
  const Y = parseInt(now[1], 10);

  // Determine the stroke length along the axes and filter inappropriate values
  const xPosition = [X + 2, X - 2, X + 1, X - 1]
    .filter(position => position > 0 && position < 9);
  const yPosition = [Y + 2, Y - 2, Y + 1, Y - 1]
    .filter(position => position > 0 && position < 9);

  // Calculate each turn of the knight
  // To get the move of the figure, it is necessary to observe the condition: every move - three cells
  // All satisfying options are written to the allMoves array
  let i;
  let j;
  for (i = 0; i < xPosition.length; i += 1) {
    for (j = 0; j < yPosition.length; j += 1) {
      if (Math.abs(X - xPosition[i]) + Math.abs(Y - yPosition[j]) === 3) {
        allMoves.push(xMoves[xPosition[i] - 1] + yPosition[j]);
      }
    }
  }
  // Return all possible moves
  return allMoves;
};

// The function makeGreenCells colors possible moves in green
const makeGreenCells = (el) => {
  el.style.backgroundColor = 'blue';
  const id = el.attributes[0].value;
  const horseMovesArray = knightMoves(id);
  let j;
  for (j = 0; j < horseMovesArray.length; j += 1) {
    const greenCell = document.getElementById(horseMovesArray[j]);
    greenCell.style.backgroundColor = 'green';
    greenCell.style.transition = 'all .5s ease';
  }
};

// The getDefaultBgrColor function resets checkerboard styles
// to the initial state
const getDefaultBgrColor = (arr) => {
  let i;
  for (i = 0; i < arr.length; i += 1) {
    arr[i].style.backgroundColor = '';
  }
};

// The switcher function assigns a handler to each cell,
// and also calls other functions
const switcher = () => {
  const cellsArray = document.getElementsByClassName('cell');
  let i;
  let counter = 0;
  for (i = 0; i < cellsArray.length; i += 1) {
    const el = cellsArray[i];
    el.addEventListener('click', () => {
      getDefaultBgrColor(cellsArray);
      switch (counter) {
        case 0:
          makeGreenCells(el);
          counter = 1;
          break;
        case 1:
          makeGreenCells(el);
          counter = 0;
          break;
        default:
          break;
      }
    });
  }
};
switcher();
