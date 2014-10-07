<!-- one.download http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n7 -->
C = {}

cnst = {}
cnst.utilsLib =
 "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/module-utils-latest"
cnst.importedNodes =
  "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/importedNodes"
  
priv = {}

priv.resolveNodeStatement = (name, link) ->
  res = {}
  stmt = ""
  stmt += "Appjangle.Auth.getSecret(user || Appjangle.user, "
  stmt += "  \""+link.uri()+"\","
  stmt += "  session,"
  stmt += "  function(secret) {"
  stmt += "    var "+name+";"
  stmt += "    if (secret) {"
  stmt += "      "+name+" = session.link(\""+link.uri()+"\", secret);"
  stmt += "    } else {"
  stmt += "      "+name+" = session.link(\""+link.uri()+"\");"
  stmt += "    }"
  stmt += "    nodes."+name+"="+name+";"
  res.head = stmt
  res.tail = "});"
  
  res
  

priv.generateNodesStatement = (nodes, callback) ->
  stmts = []
  for name, link of nodes
    stmts.push priv.resolveNodeStatement(name, link)
  
  head = "var nodes = {};"
  tail = ""
  for stmt in stmts
    head += stmt.head
  
  for i in [stmts.length - 1..0] by -1
    tail += stmts[i].tail
  
  callback(null, {head: head, tail: tail})
      
C.compile = (module, callback) ->
  
  Appjangle.require module.getSession().link(cnst.utilsLib)
  , (ex, ModuleUtils) ->
    if ex
      callback(ex)
      return
 
    importedNodesQuery = module.select(module.getSession()
        .node(cnst.importedNodes))
    
    importedNodesQuery.catchExceptions callback
    
    importedNodesQuery.catchUndefined ->
      callback(null, { head: "", tail: "" })
    
    importedNodesQuery.get (importedNodes) ->
      
      mu = ModuleUtils.create()
    
      mu.getDependentNodes importedNodes, (ex, nodes) ->
        if ex
          callback(ex)
          return
        priv.generateNodesStatement nodes, callback
  
C
<!-- one.end -->
