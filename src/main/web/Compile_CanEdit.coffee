<!-- one.download http://slicnet.com/mxrogm/mxrogm/data/stream/2014/4/2/n6 -->C = {}

cnst = {}
cnst.moduleFactory =
  "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/modulefactory"
cnst.creationScript =
  "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/creationscript"
cnst.aType = "http://slicnet.com/mxrogm/mxrogm/data/stream/2013/12/11/n5"

priv = {}


priv.buildTest = (nodelist) ->
  js = ""
  js += "var linksQry=node.selectAllLinks();"
  js += "linksQry.catchExceptions(callback);"
  js += "linksQry.get(function(links) {"
  js += "var uris = links.uris();"
  js += "var valid = true;"
  for type in nodelist.nodes()
    js += 'if (valid && $.inArray("'+type.uri()+'", uris) === -1) {'
    js += '  valid = false;'
    js += '}'
  js+= "callback(null, valid);"
  js += "});"
  
  js


  
priv.prepareImports = (module, callback) ->
  Appjangle.require module.getSession().link(
    "http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n7/7"),
    (ex, CompileImports) ->
      if ex
        callback ex
        return
      
      CompileImports.compile module, callback
        
      
priv.getFactory = (module, callback) ->
  session = module.getSession()
  
  qry = module.select(session.link(cnst.moduleFactory))
    .select(session.link(cnst.creationScript))
  
  qry.catchExceptions callback
  
  qry.get (creationScript) ->
    callback null, creationScript.value()

priv.getTypes = (importScript, creationScript, callback) ->
  #server = Nextweb.startServer(17811)
  tempSession = AppjangleJs.createSession()
    
  tempSession.seed("local").get (node) ->
    js = ""
    js += importScript.head
    js += "module.create = function(node) {"
    js += creationScript
    js += "};"
    js += "initCompleteCallback(null, module);"
    js += importScript.tail
    
    module = {}
    user = Appjangle.user
    initCompleteCallback = (ex, module) ->
      
      module.create(node)
      # why is it not triggered?
      tempSession.commit().get ->
        
        typeQry = node.selectAll(tempSession.link(cnst.aType))
        typeQry.catchExceptions callback
        typeQry.get (nodelist) ->
          
          head =  ""
          head += "module.canEdit = 'function(node, callback) {"
          if nodelist.size() == 0
            head += "  callback(null, true);"
            head += "}';"
            callback null, {head: head, tail: ""}
          else
            head += priv.buildTest(nodelist)
            head += "}';"
            
            callback null, {head: head, tail: ""}

          tempSession.close().get()
          #server.shutdown().get()
    session = tempSession
    eval js
  
  
C.compile = (module, callback) ->
  priv.prepareImports module, (ex, importCompilation) ->
    priv.getFactory module, (ex, creationScript) ->
      priv.getTypes importCompilation, creationScript, callback
  
      

C<!-- one.end -->
