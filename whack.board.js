var WHACK = WHACK || {};

WHACK.Board = (function(){
  var _board,
      _moles;

  var createBoard = function createBoard() {
    var board = document.createElement("WHACK-A-MOLE");
    document.body.appendChild(board);
    return board;
  }

  var createMoles = function createMoles() {
    for(i = _moles.length; i < 8; i++){
      var square = document.createElement("DIV");
      square.classList.add("mole");
      _board.appendChild(square);
    }
  }

  var addMoleData = function addMoleData(){
    for(i = 0; i < _moles.length; i++){
      _moles[i].setAttribute("data-id", i)
    }
  }

  var setupBoard = function setupBoard(){
    _board = document.getElementsByTagName("WHACK-A-MOLE")[0] || createBoard();
    _moles = _board.getElementsByClassName("mole");
    if(_moles.length < 8) createMoles();
    addMoleData()
  }

  var listeners = function(cb){
    console.log(cb)
    if(cb.click){
      _board.addEventListener('click', function(e){
        console.log("clicked!")
        console.log(e.target)
        cb.click(e.target.getAttribute("data-id"))
      })
    }
  }

  var init = function init(callbacks){
    setupBoard();
    listeners(callbacks);
  }

  var render = function render(moleData){
    for(i = 0; i < moleData.length; i++){
      if(moleData[i].cheeky()){
        _moles[i].classList.add("cheeky");
      } else {
        _moles[i].classList.remove("cheeky");
      }
    }
  }

  return {
    init: init,
    render: render
  }
})()
