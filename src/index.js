/* eslint-env browser */
/* eslint-disable no-param-reassign */
/* eslint-disable no-loop-func */

// Функция horseMoves возвращает массив возможных ходов,
// она взята из второго задания
const horseMoves = (now) => {
  // Определяем массив для всех возможных ходов
  const allMoves = [];

  // Определяем массив движений по оси 'X'
  const xMoves = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  // Определяем координаты фигуры по оси 'X'
  const X = xMoves.indexOf(now[0]) + 1;

  // Определяем координаты по оси 'Y'
  const Y = parseInt(now[1], 10);

  // Определяем длину хода по осям и фильтруем неподходящие значения
  const xPosition = [X + 2, X - 2, X + 1, X - 1]
    .filter(position => position > 0 && position < 9);
  const yPosition = [Y + 2, Y - 2, Y + 1, Y - 1]
    .filter(position => position > 0 && position < 9);

  // Вычисляем каждый ход фигуры
  // Чтобы получить ход фигуры, необходимо соблюсти условие: каждый ход - три клетки
  // Все удовлетворяющие условию варианты записываются в массив allMoves
  let i;
  let j;
  for (i = 0; i < xPosition.length; i += 1) {
    for (j = 0; j < yPosition.length; j += 1) {
      if (Math.abs(X - xPosition[i]) + Math.abs(Y - yPosition[j]) === 3) {
        allMoves.push(xMoves[xPosition[i] - 1] + yPosition[j]);
      }
    }
  }
  // Возвращаем все возможные ходы
  return allMoves;
};

// Функция makeGreenCells окрашивает возможные ходы в зелёный цвет
const makeGreenCells = (el) => {
  el.style.backgroundColor = 'blue';
  const id = el.attributes[0].value;
  const horseMovesArray = horseMoves(id);
  let j;
  for (j = 0; j < horseMovesArray.length; j += 1) {
    const greenCell = document.getElementById(horseMovesArray[j]);
    greenCell.style.backgroundColor = 'green';
    greenCell.style.transition = 'all .5s ease';
  }
};

// Функция getDefaultBgrColor сбрасывает стили шахматной доски
// до начального состояния
const getDefaultBgrColor = (arr) => {
  let i;
  for (i = 0; i < arr.length; i += 1) {
    arr[i].style.backgroundColor = '';
  }
};

// Функция switch назначает обработчик каждой клетке,
// а также вызывает другие функции
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
