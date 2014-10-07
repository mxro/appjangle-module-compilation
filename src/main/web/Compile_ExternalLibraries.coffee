<!-- one.download http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n5 -->C = {}

cnst = {}
cnst.xmlCollection =
 "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/XmlCollections"
cnst.externalScriptList =
  "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/externalScriptList"
  
priv = {}


priv.generateRequireStatement = (ar, callback) ->
  
  if ar.length == 0
    callback(null, {head: "", tail: ""})
    return
  
  head = "Appjangle.requireExternal(["
  for library in ar
    head += "\""+library+"\", "
  
  head += "], function(ex, libs) {"
  
  head += "if (ex) { initCompleteCallback(ex); return; }"
  
  tail = "});"
  
  callback(null, {head: head, tail: tail})
      
C.compile = (module, callback) ->
  
  Appjangle.require module.getSession().link(cnst.xmlCollection)
  , (ex, XmlCollections) ->
    if ex
      callback(ex)
      return
    
    externalScriptsQuery = module.select(session
        .node(cnst.externalScriptList))
    
    externalScriptsQuery.catchExceptions callback
    
    externalScriptsQuery.catchUndefined ->
      callback(null, { head: "", tail: "" })
    
    externalScriptsQuery.get (externalScripts) ->
      
      ar = XmlCollections
        .create()
        .buildArrayFromValue(externalScripts.value())
      
      
      priv.generateRequireStatement ar, callback
        
    
  
C<!-- one.end -->
