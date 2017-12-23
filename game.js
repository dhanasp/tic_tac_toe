const Player = function(name,symbol) {
  this.name=name;
  this.symbol = symbol;
  this.playerMoves = [];
}
const Game = function() {
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
  this.players = [new Player('Player1','O'), new Player('Player2','X')];
  this.playersMoves = [];
}

Player.prototype={
  isMoveAlreadyMade:function(move){
    return this.playerMoves.includes(move);
  }
}


Game.prototype = {
  decidePlayerTurn: function() {
    if (this.playersMoves.length % 2 == 0) {
      return this.players[1];
    } else {
      return this.players[0];
    }
  },

  getSymbolOfPlayer: function() {
    let player = this.decidePlayerTurn();
    return player.symbol;
  },

  getNameOfPlayer:function(player){
    return player.name;
  },

  isMoveAlreadyMadeInGame:function(number) {
    return this.playersMoves.includes(number);
  },

  isSubset: function(subset, superset) {
    return subset.every(function(element) {
      return superset.includes(element);
    });
  },

  isMatchDraw:function(){
    return this.playersMoves.length>=9
  },

  hasWon: function(player) {
    return this.winCondition.some((subset) => {
      return this.isSubset(subset, player.playerMoves);
    });
  }
}
