const board = document.querySelector('.board');

let pairs = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

pairs.forEach(pair => {
  console.log(pair);

  const card = document.createElement('div');
  card.className = 'card';
  card.innerText = pair;

  board.append(card);
});

console.log(board);