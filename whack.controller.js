WHACK = WHACK || {}

WHACK.Controller = (function(board, mole){

  var init = function init () {
    board.init();
  }

  return {
    init: init
  }

})(WHACK.Board, WHACK.Mole)
