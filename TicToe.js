const board = document.getElementById('board');
const status = document.getElementById('status');
let currentPlayer = 'X';
let gameActive = true;
const cells = [];

function createBoard() {
  board.innerHTML = '';
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    cell.addEventListener('click', handleCellClick);
    board.appendChild(cell);
    cells[i] = '';
  }
  status.textContent = `Player ${currentPlayer}'s turn`;
}

function handleCellClick(e) {
  const index = e.target.dataset.index;
  if (cells[index] || !gameActive) return;
  cells[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  if (checkWin()) {
    status.textContent = `🎉 Player ${currentPlayer} wins!`;
    gameActive = false;
  } else if (cells.every(cell => cell)) {
    status.textContent = "It's a draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    status.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function checkWin() {
  const winCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  return winCombos.some(combo =>
    combo.every(index => cells[index] === currentPlayer)
  );
}

function resetGame() {
  currentPlayer = 'X';
  gameActive = true;
  createBoard();
}

createBoard();
