var WHACK = WHACK || {};

WHACK.Mole = (function() {
  var moles = [];

  var Mole = function Mole () {
    var cheekyBastard = false,
        _hungry = true,
        _angry = "maybe",
        _screech = "AAARGH";

    var emitScreech = function emitScreech () {
      console.log(_screech);
      return _screech;
    };

    var isCheeky = function isCheeky() {
      return !!cheekyBastard;
    };

    var wreck = function wreck() {
      cheekyBastard = false;
      return isCheeky();
    };

    var blandiloquate = function blandiloquate() {
      cheekyBastard = true;
      return isCheeky();
    };

    var starving = function starving() {
      return _hungry;
    };

    var pissedOff = function pissedOff() {
      return _angry;
    };

    return {
      pissedOff: pissedOff,
      starving: starving,
      blandiloquate: blandiloquate,
      wreck: wreck,
      cheeky: isCheeky
    }
  };

  var randomCheeky = function randomCheeky(){
    if(Math.random() > .7){
      var moles = getMoles()
      var cheekyMole = moles[Math.floor(Math.random() * moles.length)];
      cheekyMole.blandiloquate();
    }
  }

  var click = function click(id){
    var clickedMole = getMoles()[+id];
    clickedMole.wreck();
  }

  var getMoles = function(){
    return moles;
  };

  var addMole = function(){
    moles.push(Mole())
    return getMoles();
  };
  var init = function init (){
    for(i = 0; i < 8; i++){
      addMole();
    }
  }

  return {
    init: init,
    getMoles: getMoles,
    random: randomCheeky,
    click: click
  }

})();
