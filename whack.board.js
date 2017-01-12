WHACK = WHACK || {}

WHACK.Board = (function(){
  var _board,
      _squares;
  var createBoard = function createBoard() {
    var board = document.createElement("WHACK-A-MOLE");
    document.body.appendChild(board);
  }

  var createSquares = function createSquares() {
    for(i = _squares.length -1; i < 8; i++){
      var square = document.createElement("DIV");
      
    }
  }

  var setupBoard = function setupBoard(){
    _board = document.getElementsByTagName("WHACK-A-MOLE")[0] || createBoard()
    _squares = document.getElementsByClassName("mole")
    if(_squares.length < 8) createSquares();
  }

  var listeners = function(listeners){

  }

  var init = function init(callbacks){
    listeners(callbacks);
  }

  return {
    init: init
  }
})()
