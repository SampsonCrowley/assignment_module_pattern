WHACK = WHACK || {}

WHACK.Controller = (function(board, mole){

  var interval;

  var _gameLoop = function _gameLoop(){
    mole.random();
    board.render(mole.getMoles());
  }

  var click = function click(id) {
    mole.click(id);
    board.render(mole.getMoles());
  }

  var runGame = function runGame(){
    interval = setInterval(function(){
      _gameLoop();
    }, 1000);
  }

  var pauseGame = function pauseGame(){
    clearInterval(interval);
  }

  var init = function init () {
    mole.init();    
    board.init({
      click: click
    });
    runGame();
  }

  return {
    init: init,
    run: runGame,
    pause: pauseGame
  }

})(WHACK.Board, WHACK.Mole)
