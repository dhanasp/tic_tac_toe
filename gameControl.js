
let startGame=function(){
  game=new Game();
  console.log(game);
  window.onclick=loadGame;

}
let loadGame=function(){
  let cell=event.target.id;
  console.log(event);
  game.addPlayersMoves(cell);
  document.getElementById(cell).innerText=game.getSymbolOfPlayer();
  getAction();
}

// let getAction=function(){
//   if () {
//
//   }
//
//
// }



window.onload=startGame;
