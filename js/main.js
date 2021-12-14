// Global Constants
const NUM_ROWS = 15;
const NUM_COLS = 15;

// Create a Grid Arrays
let gridLevels = [createCleanGridArray(), createCleanGridArray(), createDirtyGridArray()];
let currentLevel = 0;
let grid = gridLevels[0];
grid[player.row][player.col] = 2;

// Create Divs for Grid
createDivGrid();

[...document.getElementsByClassName('grid-select unselected')].forEach(elem => {
  createMiniGrid(gridLevels[elem.id.split('-')[1]], elem);
});

// Event Listeners
document.addEventListener("keydown", keydownHandler);

// Keydown Handler
function keydownHandler(event) {
  if (event.keyCode == 39) {
    // Test to see if adjacent cell is taken
    if (grid[player.row][player.col + 1] == 0) {
      movePlayer(player.row, player.col + 1);
    }
  } else if (event.keyCode == 37) {
    // Test to see if adjacent cell is taken
    if (grid[player.row][player.col - 1] == 0) {
      movePlayer(player.row, player.col - 1);
    }
  } else if (event.keyCode == 40) {
    if (player.row < 14) {
      // Test to see if adjacent cell is taken
      if (grid[player.row + 1][player.col] == 0) {
        movePlayer(player.row + 1, player.col);
      }
    }
  } else if (event.keyCode == 38) {
    if (player.row > 0) {
      // Test to see if adjacent cell is taken
      if (grid[player.row - 1][player.col] == 0) {
        movePlayer(player.row - 1, player.col);
      }
    }
  }
}

// Switch Grids
document.querySelectorAll('.grid-select').forEach(e => e.addEventListener('click', () => {
  if (e.classList.contains('selected')) {} else {
    document.getElementsByClassName('grid-select selected')[0].innerHTML = '';
    document.getElementsByClassName('grid-select selected')[0].classList = 'grid-select unselected';
    e.innerHTML = 'Selected Grid';
    e.classList = 'grid-select selected';
    changeGrid(e.id.split('-')[1]);
    [...document.getElementsByClassName('grid-select unselected')].forEach(elem => {
      elem.innerHTML = '';
      createMiniGrid(gridLevels[elem.id.split('-')[1]], elem);
    });
  }
}))

// Dark Mode
var darkModeEl = document.querySelector('#dark-mode');
darkModeEl.addEventListener('click', () => {
  if (darkModeEl.checked == true) {
    document.querySelector('link').setAttribute('href', 'css/darkMode.css');
    localStorage.setItem('theme', 'dark')
  } else if (darkModeEl.checked == false) {
    document.querySelector('link').setAttribute('href', 'css/lightMode.css');
    localStorage.setItem('theme', 'light');
  }
})

if (localStorage.getItem('theme') ==  'dark') {
  darkModeEl.checked = true;
  document.querySelector('link').setAttribute('href', 'css/darkMode.css');
}

// Clear Grid
document.querySelector('button#clear-grid').addEventListener('click', () => {
  movePlayer(13, 0);
  grid = createCleanGridArray();
  grid[player.row][player.col] = 2;
  deleteGrid();
  createDivGrid();
})