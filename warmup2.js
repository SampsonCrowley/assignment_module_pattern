var BS = BS || {}
BS.stub = (function(_){

  var stub = {};

  stub.publicBSMethod = function(){
    return _.publicBSMethod()
  }
  stub.combinedPublicBS = function(){
    return _.bs()
  }

  return stub
})(BS.module)
