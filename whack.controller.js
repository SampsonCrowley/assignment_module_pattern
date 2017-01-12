WHACK = WHACK || {}

WHACK.Controller = (function(board, mole){

  var init = function init () {
    console.log(board)
    board.init();
  }

  return {
    init: init
  }

})(WHACK.Board, WHACK.Mole)
