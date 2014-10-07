<!-- one.download http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n8 -->DC = {}

priv = {}

priv.defaultCompilers = (session) ->
  return [
    # imported Nodes
    session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n7/7"),
    # html
    session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/28/n4/7"),
    # init script
    session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/29/n4/7"),
    # factory
    session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/30/n5/7"),
    # factoryLabel
    session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/4/2/n4/7"),
    # canEdit
    session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/4/2/n6/7"),
    # preferences
    session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/30/n6/7"),
    # label
    session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/30/n8/7"),
    # icon
    session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/30/n9/7"),
    # css
    session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n1/7"),
    # require
    session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n4/7"),
    # requireExternal
    session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n5/7"),
    # requireExternalCss
    session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n6/7")
  ]

cnst = {}
cnst.compilerLib =
  "http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/28/n3/7"
  
DC.compile = (module, callback) ->
  Appjangle.require priv.defaultCompilers(module.getSession())
  , (ex, compilerLibs) ->
    compilers = []
    for lib in compilerLibs
      compilers.push lib.compile
      
    Appjangle.require session.link(cnst.compilerLib), (ex, Compiler) ->
      Compiler.compile module, compilers, callback

DC<!-- one.end -->
