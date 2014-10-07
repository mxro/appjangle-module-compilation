<!-- one.download http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n6 -->C = {}

cnst = {}
cnst.xmlCollection =
 "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/XmlCollections"
cnst.externalStylesheetList =
  "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/externalStylesheetList"
  
priv = {}


priv.generateRequireStatement = (ar, callback) ->
  
  if ar.length == 0
    callback(null, {head: "", tail: ""})
    return
  
  head = "Appjangle.requireExternalCss(["
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
    
    externalStylesheetQuery = module.select(module.getSession()
        .node(cnst.externalStylesheetList))
    
    externalStylesheetQuery.catchExceptions callback
    
    externalStylesheetQuery.catchUndefined ->
      callback(null, { head: "", tail: "" })
    
    externalStylesheetQuery.get (externalStylesheet) ->
      
      ar = XmlCollections
        .create()
        .buildArrayFromValue(externalStylesheet.value())
      
      
      priv.generateRequireStatement ar, callback
        
    
  
C<!-- one.end -->
