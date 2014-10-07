<!-- one.download http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n4 -->C = {}

cnst = {}
cnst.utilsLib =
 "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/module-utils-latest"
cnst.initScript =
  "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/initscript"
  
priv = {}


priv.generateRequireStatement = (libs, callback) ->
  
  if libs.length == 0
    callback(null, {head: "", tail: ""})
    return
  
  head = "Appjangle.require(["
  for library in libs
    head += "session.link(\""+library.uri()+"\"), "
  
  head += "], function(ex, libs) {"
  
  head += "if (ex) { initCompleteCallback(ex); return; }"
  
  tail = "});"
  
  callback(null, {head: head, tail: tail})
      
C.compile = (module, callback) ->
  
  Appjangle.require module.getSession().link(cnst.utilsLib)
  , (ex, ModuleUtils) ->
    librariesQuery = module.select(module.getSession()
        .link(cnst.initScript))
    
    librariesQuery.catchExceptions callback
    
    librariesQuery.get (libNode) ->
      mu = ModuleUtils.create()
    
      mu.getDependentLibraries libNode, (ex, libs) ->
        priv.generateRequireStatement libs, callback
        
        
    
  
C<!-- one.end -->
