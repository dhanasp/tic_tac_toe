let startGame = function() {
  game = new Game();
  window.onclick = loadGame;

}
let loadGame = function() {
  let cell = event.target.id;
  let player=game.decidePlayerTurn();
  console.log(player);
  if (!game.isMoveAlreadyMadeInGame(+cell)) {
    document.getElementById(cell).innerText = game.getSymbolOfPlayer(player);
  }
  game.addAllPlayersMoves(+cell);
  getActionBasedOnGameStatus(player);
}

let getActionBasedOnGameStatus = function(player) {
  if(player.hasWon()){
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
