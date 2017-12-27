function createGrid(gridSize) {
  const grid = document.createElement('div');
  grid.setAttribute('id', 'grid');
  grid.setAttribute('class', 'mx-auto');
  document.getElementById('grid-container').appendChild(grid);
  for (var i = 0; i < gridSize; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.style.cssText = `height: ${100 / gridSize}%;`
    grid.appendChild(row);
    for (var i2 = 0; i2 < gridSize; i2++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.cssText = `width: ${100 / gridSize}%;`
      cell.style.background = 'white'
      row.appendChild(cell);
    };
  };
};

document.getElementById("input-grid-size").addEventListener('change', resize);
function resize() {
  if (this.value >= 1 && this.value <= 64) {
    document.getElementById('grid').parentNode.removeChild(grid);
    createGrid(this.value)
  } else {
    alert("Error! Enter a number between 1 and 64.");
  };
};

document.getElementById("clear-grid").addEventListener('click', clearGrid);
function clearGrid() {
  const cells = document.querySelectorAll(`div[class="cell"]`);
  cells.forEach(cell => cell.style.background = 'white');
  containerGrid = document.getElementById('grid-container')
  containerGrid.classList.add("shake");
  setTimeout(function(){
      containerGrid.classList.remove("shake");
    }, 500);
};

function randomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  return `rgb(${x}, ${y}, ${z})`;
}

document.getElementById("color-trail").addEventListener('click', colorTrail);
function colorTrail() {
  const cells = document.querySelectorAll(`div[class="cell"]`);
  cells.forEach(cell => cell.onmouseover = function() {
    this.style.background = randomColor();
  });
};

document.getElementById("black-trail").addEventListener('click', blackTrail);
function blackTrail() {
  const cells = document.querySelectorAll(`div[class="cell"]`);
  cells.forEach(cell => cell.onmouseover = function() {
    this.style.background = '#1C1C1C';
  });
};

document.getElementById("color-input").addEventListener('change', colorPicker);
function colorPicker() {
  const cells = document.querySelectorAll(`div[class="cell"]`);
  colorSelected = this.value;
  cells.forEach(cell => cell.onclick = function() {
    this.style.background = `${colorSelected}`;
  });
  cells.forEach(cell => cell.onmouseover = function() {
  });
};
createGrid(16);
