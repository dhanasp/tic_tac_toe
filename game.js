
const Player=function(symbol){
  this.symbol=symbol;
  this.playerMove=[];
}
const Game=function(){
  this.winCondition=[[1,2,3],[4,5,6],[7,8,9],[1,5,9],[2,6,8],[],[],[]]
  this.players=[ new Player('X'),new Player('O')];
  this.playersMoves=[];
}

Game.prototype={

  decidePlayerTurn:function(){
    if (this.playersMoves.length%2==0) {
      return this.players[0];
    }else{
      return this.players[1];
    }
  },

  getSymbolOfPlayer:function(){
    let player=this.decidePlayerTurn();
    return player.symbol;
  },

  addPlayersMoves:function(number){
    if (!this.isMoveAlreadyMade(number)) {
      this.playersMoves.push(number);
    }
    player=this.decidePlayerTurn();
    player.playerMove.push(number);
  },

  isMoveAlreadyMade:function(number){
    return this.playersMoves.includes(number);
  },

  isSubset:function(){

  },

  hasWon:function(){
    
  }



}
