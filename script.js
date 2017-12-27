function createGrid(gridSize) {
  const gridContainer = document.getElementById('grid-container');
  const grid = document.createElement('div');
  grid.setAttribute('id', 'grid');
  grid.setAttribute('class', 'mx-auto');
  gridContainer.appendChild(grid);
  for (var i = 0; i < gridSize; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.style.cssText = `height: ${100 / gridSize}%;`
    grid.appendChild(row);
    for (var i2 = 0; i2 < gridSize; i2++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.cssText = `width: ${100 / gridSize}%;`
      row.appendChild(cell);
    };
  };
};

/* event listener */
inputGridSize = document.getElementById("input-grid-size"),
inputGridSize.addEventListener('change', resize);

/* function */
function resize() {
  if (this.value >= 1 && this.value <= 64) {
    const grid = document.getElementById('grid');
    grid.parentNode.removeChild(grid);
    createGrid(this.value)
  } else {
    alert("Error! Enter a number between 1 and 64.");
  };
};

createGrid(16)
