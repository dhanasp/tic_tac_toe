const Player = function(name,symbol) {
  this.winCondition = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [2, 5, 8],
    [3, 6, 9],
    [1, 4, 7],
    [3, 5, 7]
  ]
  this.name=name;
  this.symbol = symbol;
  this.playerMoves = [];
}

Player.prototype={
  isMoveAlreadyMade:function(move){
    return this.playerMoves.includes(move);
  },
  addMove:function(move){
    this.playerMoves.push(move);
  },
  isSubset:function(subset, superset) {
    return subset.every(function(element) {
      return superset.includes(element);
    });
  },
  hasWon:function() {
    let player=this;
    return this.winCondition.some(function(subset){
      return player.isSubset(subset, player.playerMoves);
    });
  }
}


const Game = function() {
  this.players = [new Player('Player1','O'), new Player('Player2','X')];
  this.playersMoves = [];
}



Game.prototype = {
  decidePlayerTurn: function() {
      if (this.playersMoves.length % 2 == 0) {
      return this.players[0];
    } else {
      return this.players[1];
    }
  },

  getSymbolOfPlayer: function(player) {
    return player.symbol;
  },

  getNameOfPlayer:function(player){
    return player.name;
  },

  isMoveAlreadyMadeInGame:function(number) {
    return this.playersMoves.includes(number);
  },


  addAllPlayersMoves:function(move){
    if (!game.isMoveAlreadyMadeInGame(move)) {
      let player = game.decidePlayerTurn();
      player.addMove(move);
      game.playersMoves.push(move);
    }
  },

  isMatchDraw:function(){
    return this.playersMoves.length>=9
  },

}
