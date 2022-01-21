// HTML Elements
let containerEl = document.getElementById("container");

// Create Grid Array
function createCleanGridArray() {
  // Create and Return Grid Array
  return [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
}

// Premade Grid Array
function createDirtyGridArray() {
  // Create and Return Grid Array
  return [ 
    [ 5, 0, 0, 0, 4, 4, 0, 0, 0, 4, 4, 0, 0, 0, 5 ],
    [ 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0 ],
    [ 0, 1, 3, 1, 0, 0, 1, 3, 1, 0, 0, 1, 3, 1, 0 ],
    [ 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0 ],
    [ 4, 0, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 0, 4 ],
    [ 4, 0, 0, 0, 5, 4, 5, 0, 5, 4, 5, 0, 0, 0, 4 ],
    [ 0, 0, 1, 0, 0, 5, 0, 0, 0, 5, 0, 0, 1, 0, 0 ],
    [ 0, 1, 3, 1, 0, 0, 0, 3, 0, 0, 0, 1, 3, 1, 0 ],
    [ 0, 0, 1, 0, 0, 5, 0, 0, 0, 5, 0, 0, 1, 0, 0 ],
    [ 4, 0, 0, 0, 5, 4, 5, 0, 5, 4, 5, 0, 0, 0, 4 ],
    [ 4, 0, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 0, 4 ],
    [ 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0 ],
    [ 0, 1, 3, 1, 0, 2, 1, 3, 1, 0, 0, 1, 3, 1, 0 ],
    [ 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0 ],
    [ 5, 0, 0, 0, 4, 4, 0, 0, 0, 4, 4, 0, 0, 0, 5 ] 
  ];
}

// Create Divs for Array
function createDivGrid() {
  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      // Create Div for Each Square on Grid
      let divEl = document.createElement("div");

      // Add ID to each divEl
      divEl.id = "cell" + row + "-" + col;

      // Add appropriate class to each divEl
      if (grid[row][col] == 1) {
        divEl.classList.add("grey");
      } else if (grid[row][col] == 2) {
        divEl.classList.add("player");
      } else if (grid[row][col] == 3) {
        divEl.classList.add("red");
      } else if (grid[row][col] == 4) {
        divEl.classList.add("green");
      } else if (grid[row][col] == 5) {
        divEl.classList.add("blue");
      }


      // Add Data Rows and Columns
      divEl.dataset.row = row;
      divEl.dataset.col = col;

      // Add Event Listener on Click
      divEl.addEventListener("mousedown", cellClicked);

      // Add Div to Container
      containerEl.append(divEl);
    }
  }
}

// Click Event for Cells
function cellClicked(event) {
  if (event.target.classList.contains("player")) {
  } else {
    // Get Color of Selected Element
    let color = selectedColor;

    // Get Row and Col of Cell
    let row = event.target.dataset.row;
    let col = event.target.dataset.col;

    event.target.classList = "";

    if (event.button == 0) {
      // Update Clicked Cell
      if (color == "grey") {
        event.target.classList.add("grey");
        grid[row][col] = 1;
      } else if (color == "red") {
        event.target.classList.add("red");
        grid[row][col] = 3;
      } else if (color == "green") {
        event.target.classList.add("green");
        grid[row][col] = 4;
      } else if (color == "blue") {
        event.target.classList.add("blue");
        grid[row][col] = 5;
      }
    } else if (event.button == 2) {
      grid[row][col] = 0;
    }
  }
}

// Create Mini Grids for Grid Changing
function createMiniGrid(gridArray, location) {
  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      let miniDivEl = document.createElement("div");

      miniDivEl.classList.add("mini-grid-element")

      if (gridArray[row][col] == 1) {
        miniDivEl.classList.add("grey");
      } else if (gridArray[row][col] == 3) {
        miniDivEl.classList.add("red");
      } else if (gridArray[row][col] == 4) {
        miniDivEl.classList.add("green");
      } else if (gridArray[row][col] == 5) {
        miniDivEl.classList.add("blue");
      }
      
      location.append(miniDivEl);
    }
  }
}

// Delete Grid
function deleteGrid() {
  containerEl.innerHTML = "";
}

// Change the Grid
function changeGrid(newGrid) {
  gridLevels[currentLevel] = grid;
  grid = gridLevels[newGrid];
  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      if (grid[row][col] == 2 && grid[row] != player.row && grid[col] != player.col) {
        grid[row][col] = 0;
      }
    }
  }
  console.log(gridLevels[currentLevel]);
  currentLevel = newGrid;
  localStorage.setItem('selectedGrid', newGrid);
  grid[player.row][player.col] = 2;
  deleteGrid();
  createDivGrid();
}