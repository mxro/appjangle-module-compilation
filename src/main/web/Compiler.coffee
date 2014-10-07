<!-- one.download http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/28/n3 -->C = {}

priv = {}

priv.applyCompile = (module) ->
  return (item, callback) ->
    try
      console.log 'apply' +item
      item module, (ex, js) ->
        callback ex, js
    catch e
      callback {exception: "Failed on compiling item "+e}

C.compile = (module, compilers, callback) ->
  res = ""

  async.map compilers, priv.applyCompile(module), (ex, compilations) ->
    console.log 'here'
    if ex
      callback(ex)
      return
    
    joined_head = ""
    joined_tail = ""
    for compilation in compilations
      joined_head += compilation.head
      
    for i in [compilations.length - 1..0] by -1
      joined_tail += compilations[i].tail
     
      
    callback(null, "//Appjangle.Module\n"+
             "var init;"+
             "init = function(callback) {"+
             "  var ml = {};"+
             "  ml.init = function("+
             "     module, session, user, initCompleteCallback) {"+
                    joined_head+
                    "initCompleteCallback(null, module);"+
                    joined_tail+
             "  };"+
             "  callback(null, ml);"+
             "};")
  

C<!-- one.end -->
