let startGame = function() {
  game = new Game();
  window.onclick = loadGame;

}
let loadGame = function() {
  let cell = event.target.id;
  document.getElementById(cell).innerText = game.getSymbolOfPlayer();
  game.addPlayerMoves(+cell);
  game.addBothPlayersMoves(+cell);
  getActionBasedOnGameStatus();
}

let getActionBasedOnGameStatus = function() {
  if (game.hasWon(player)) {
    player = game.decidePlayerTurn();
    return displayStatusForWinning(player);
  }
  if (game.isMatchDraw()) {
    return displayMatchDraw();
  }
}

displayStatusForWinning = function(player) {
  let gameStatus = document.getElementById('gameStatus');
  gameStatus.innerText = 'Winner is ' + player.name;
  stopGame();
}

displayMatchDraw = function() {
  let gameStatus = document.getElementById('gameStatus');
  gameStatus.innerText = 'Match Draw!!!';
  stopGame();
}

stopGame = function() {
  window.onclick = null;
}

window.onload = startGame;
