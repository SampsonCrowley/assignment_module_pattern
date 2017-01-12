var WHACK = WHACK || {};

WHACK.Board = (function(){
  var _board,
      _moles,
      _hammer;

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
    addMoleData();
    _hammer = createHammer();
  }

  var createHammer = function createHammer(){
    var hammer = document.createElement("IMG");
    hammer.src = "https://openclipart.org/image/2400px/svg_to_png/196484/wooden-mallet-magnesusversion.png";
    hammer.classList.add("hammer");
    _board.appendChild(hammer);
  }

  var listeners = function(cb){
    if(cb.click){
      _board.addEventListener('click', function(e){
        cb.click(e.target.getAttribute("data-id"))
      })
    }
    _board.addEventListener("mousemove", function(e){
      hammer(e);
    });
  }

  var hammer = function(e) {
    _hammer.style.top = e.layerY;
    _hammer.style.left = e.layerX;
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
