const gameContainer = document.getElementById('boardContainer'); // Corrected the ID
const totalCells = 12 * 12;

for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gameContainer.appendChild(cell);
}
