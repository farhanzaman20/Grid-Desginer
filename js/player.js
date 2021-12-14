// Player Object
let player = {
    row: 13,
    col: 0
  }
  
  // Move Player
  function movePlayer(newRow, newCol) {
    // Remove Player Class from Current Location 
    let cellId = "cell" + player.row + "-" + player.col;
    document.getElementById(cellId).classList.remove("player");
  
    // Set Grid Array to 0 for Current Location
    grid[player.row][player.col] = 0;
  
    // Update Player Location
    player.row = newRow;
    player.col = newCol;
  
    // Update Class and Grid
    cellId = "cell" + player.row + "-" + player.col;
    document.getElementById(cellId).classList.add("player");
  }