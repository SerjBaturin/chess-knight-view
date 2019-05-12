// Функция horseMoves возвращает возможные ходы шахматного коня в массиве allMoves
// Определение ходов происходит путём отсчёта клеток поля по осям 'X' и 'Y' от положения фигуры
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
  //return allMoves;

  allMoves.map(item => console.log(item));
};
