WHACK = WHACK || {}

WHACK.Controller = (function(board, mole){

  var interval;

  var _gameLoop = function _gameLoop(){
    mole.random();
    board.render(mole.getMoles());
  }

  var runGame = function runGame(){
    interval = setInterval(function(){
      _gameLoop();
    }, 1000)
  }

  var pauseGame = function pauseGame(){
    clearInterval(interval);
  }

  var init = function init () {
    mole.init();    
    board.init({
      click: mole.click
    });
    runGame();
  }


  return {
    init: init,
    run: runGame,
    pause: pauseGame
  }

})(WHACK.Board, WHACK.Mole)
