let startGame = function() {
  game = new Game();
  window.onclick = loadGame;

}
let loadGame = function() {
  let cell = event.target.id;
  if (!game.isMoveAlreadyMadeInGame(+cell)) {
    game.playersMoves.push(+cell);
    document.getElementById(cell).innerText = game.getSymbolOfPlayer();
  }
  player = game.decidePlayerTurn();
  if (!player.isMoveAlreadyMade(+cell)) {
    player.playerMoves.push(+cell);
  }
  getActionBasedOnGameStatus();
}

let getActionBasedOnGameStatus = function() {
  player = game.decidePlayerTurn();
  if (game.hasWon(player)) {
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
