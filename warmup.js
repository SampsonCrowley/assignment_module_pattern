var BS = BS || {}
BS.module = (function(){

  var _privateBS = "Don't Touch!",
      publicBS = "Alright.. I guess, you can touch";

  var _privatBSMethod = function(){
    return _privateBS
  }
  var publicBSMethod = function(){
    return publicBS
  }
  var combinedPublicBS = function(){
    return _privatBSMethod() + publicBSMethod() + "... but be gentle."
  }

  return {
    publicBSMethod: publicBSMethod,
    combinedPublicBS: combinedPublicBS
  }
})()
