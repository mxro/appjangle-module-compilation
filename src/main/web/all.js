 requestNotifier.js:63
Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead 7.value.js:1
"eval //@ sourceURL=http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n8/7.value.js
" 7.value.js:22
"var DC, cnst, priv;

DC = {};

priv = {};

priv.defaultCompilers = function(session) {
  var compilers;
  compilers = [session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n7/7"), session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/28/n4/7"), session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/29/n4/7"), session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/30/n5/7"), session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/4/2/n4/7"), session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/4/2/n6/7"), session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/30/n6/7"), session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/30/n8/7"), session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/30/n9/7"), session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n1/7"), session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n4/7"), session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n5/7"), session.link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n6/7")];
  return compilers;
};

cnst = {};

cnst.compilerLib = "http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/28/n3/7";

DC.compile = function(module, callback) {
  return Appjangle.require(priv.defaultCompilers(module.getSession()), function(ex, compilerLibs) {
    var compilers, lib, _i, _len;
    compilers = [];
    for (_i = 0, _len = compilerLibs.length; _i < _len; _i++) {
      lib = compilerLibs[_i];
      compilers.push(lib.compile);
    }
    return Appjangle.require(module.getSession().link(cnst.compilerLib), function(ex, Compiler) {
      return Compiler.compile(module, compilers, callback);
    });
  });
};

DC;
" 7.value.js:23
Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead 7.value.js:1
"eval //@ sourceURL=http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n7/7.value.js
" 7.value.js:22
"var C, cnst, priv;

C = {};

cnst = {};

cnst.utilsLib = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/module-utils-latest";

cnst.importedNodes = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/importedNodes";

priv = {};

priv.resolveNodeStatement = function(name, link) {
  var res, stmt;
  res = {};
  stmt = "";
  stmt += "Appjangle.Auth.getSecret(user || Appjangle.user, ";
  stmt += "  \"" + link.uri() + "\",";
  stmt += "  session,";
  stmt += "  function(secret) {";
  stmt += "    var " + name + ";";
  stmt += "    if (secret) {";
  stmt += "      " + name + " = session.link(\"" + link.uri() + "\", secret);";
  stmt += "    } else {";
  stmt += "      " + name + " = session.link(\"" + link.uri() + "\");";
  stmt += "    }";
  stmt += "    nodes." + name + "=" + name + ";";
  res.head = stmt;
  res.tail = "});";
  return res;
};

priv.generateNodesStatement = function(nodes, callback) {
  var head, i, link, name, stmt, stmts, tail, _i, _j, _len, _ref;
  stmts = [];
  for (name in nodes) {
    link = nodes[name];
    stmts.push(priv.resolveNodeStatement(name, link));
  }
  head = "var nodes = {};";
  tail = "";
  for (_i = 0, _len = stmts.length; _i < _len; _i++) {
    stmt = stmts[_i];
    head += stmt.head;
  }
  for (i = _j = _ref = stmts.length - 1; _j >= 0; i = _j += -1) {
    tail += stmts[i].tail;
  }
  return callback(null, {
    head: head,
    tail: tail
  });
};

C.compile = function(module, callback) {
  return Appjangle.require(module.getSession().link(cnst.utilsLib), function(ex, ModuleUtils) {
    var importedNodesQuery;
    if (ex) {
      callback(ex);
      return;
    }
    importedNodesQuery = module.select(module.getSession().node(cnst.importedNodes));
    importedNodesQuery.catchExceptions(callback);
    importedNodesQuery.catchUndefined(function() {
      return callback(null, {
        head: "",
        tail: ""
      });
    });
    return importedNodesQuery.get(function(importedNodes) {
      var mu;
      mu = ModuleUtils.create();
      return mu.getDependentNodes(importedNodes, function(ex, nodes) {
        if (ex) {
          callback(ex);
          return;
        }
        return priv.generateNodesStatement(nodes, callback);
      });
    });
  });
};

C;
" 7.value.js:23
"eval //@ sourceURL=http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/28/n4/7.value.js
" 7.value.js:22
"var C;

C = {};

C.compile = function(module, callback) {
  var htmlNodeQuery;
  htmlNodeQuery = module.select(module.getSession().link("https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/uitemplate"));
  htmlNodeQuery.catchUndefined(function() {
    return callback(null, {
      head: "",
      tail: ""
    });
  });
  htmlNodeQuery.catchExceptions(callback);
  return htmlNodeQuery.get(function(html) {
    var head, renderedHtml;
    renderedHtml = html.value().replace(/\n/g, "\\n").replace(/\"/g, "\\\"");
    head = 'module.html="' + renderedHtml + '";';
    return callback(null, {
      head: head,
      tail: ""
    });
  });
};

C;
" 7.value.js:23
"eval //@ sourceURL=http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/29/n4/7.value.js
" 7.value.js:22
"var C, cnst;

C = {};

cnst = {};

cnst.initScript = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/initscript";

C.compile = function(module, callback) {
  var initScriptQuery;
  initScriptQuery = module.select(module.getSession().link(cnst.initScript));
  initScriptQuery.catchUndefined(function() {
    return callback(null, {
      head: "",
      tail: ""
    });
  });
  initScriptQuery.catchExceptions(callback);
  return initScriptQuery.get(function(initScript) {
    var head;
    head = "module.setupUi = function(container, " + "session, node, elem, preferences, history, args) {";
    head += initScript.value();
    head += "};";
    return callback(null, {
      head: head,
      tail: ""
    });
  });
};

C;
" 7.value.js:23
"eval //@ sourceURL=http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/30/n5/7.value.js
" 7.value.js:22
"var C, cnst;

C = {};

cnst = {};

cnst.moduleFactory = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/modulefactory";

cnst.creationScript = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/creationscript";

C.compile = function(module, callback) {
  var qry, session;
  session = module.getSession();
  qry = module.select(session.link(cnst.moduleFactory)).select(session.link(cnst.creationScript));
  qry.catchExceptions(callback);
  return qry.get(function(creationScript) {
    var head;
    head = "";
    head += "module.createNode = function(node) {" + (head += "  " + creationScript.value());
    head += "};";
    return callback(null, {
      head: head,
      tail: ""
    });
  });
};

C;
" 7.value.js:23
"eval //@ sourceURL=http://slicnet.com/mxrogm/mxrogm/data/stream/2014/4/2/n4/7.value.js
" 7.value.js:22
"var C, cnst;

C = {};

cnst = {};

cnst.moduleFactory = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/modulefactory";

cnst.label = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/label";

C.compile = function(module, callback) {
  var labelQuery, session;
  session = module.getSession();
  labelQuery = module.select(session.link(cnst.moduleFactory)).select(session.link(cnst.label));
  labelQuery.catchUndefined(function() {
    return callback(null, {
      head: 'module.factoryLabel = "Unnamed";',
      tail: ""
    });
  });
  labelQuery.catchExceptions(callback);
  return labelQuery.get(function(label) {
    var head;
    head = 'module.factoryLabel = "' + label.value().toString().replace(/\n/g, "\\n").replace(/\"/g, "\\\"") + '";';
    return callback(null, {
      head: head,
      tail: ""
    });
  });
};

C;
" 7.value.js:23
"eval //@ sourceURL=http://slicnet.com/mxrogm/mxrogm/data/stream/2014/4/2/n6/7.value.js
" 7.value.js:22
"var C, cnst, priv;

C = {};

cnst = {};

cnst.moduleFactory = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/modulefactory";

cnst.creationScript = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/creationscript";

cnst.aType = "http://slicnet.com/mxrogm/mxrogm/data/stream/2013/12/11/n5";

priv = {};

priv.buildTest = function(nodelist) {
  var js, type, _i, _len, _ref;
  js = "";
  js += "var linksQry=node.selectAllLinks();";
  js += "linksQry.catchExceptions(callback);";
  js += "linksQry.get(function(links) {";
  js += "var uris = links.uris();";
  js += "var valid = true;";
  _ref = nodelist.nodes();
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    type = _ref[_i];
    js += 'if (valid && $.inArray("' + type.uri() + '", uris) === -1) {';
    js += '  valid = false;';
    js += '}';
  }
  js += "callback(null, valid);";
  js += "});";
  return js;
};

priv.prepareImports = function(module, callback) {
  return Appjangle.require(module.getSession().link("http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n7/7"), function(ex, CompileImports) {
    if (ex) {
      callback(ex);
      return;
    }
    return CompileImports.compile(module, callback);
  });
};

priv.getFactory = function(module, callback) {
  var qry, session;
  session = module.getSession();
  qry = module.select(session.link(cnst.moduleFactory)).select(session.link(cnst.creationScript));
  qry.catchExceptions(callback);
  return qry.get(function(creationScript) {
    return callback(null, creationScript.value());
  });
};

priv.getTypes = function(importScript, creationScript, callback) {
  var tempSession;
  tempSession = AppjangleJs.createSession();
  return tempSession.seed("local").get(function(node) {
    var initCompleteCallback, js, module, user;
    js = "";
    js += importScript.head;
    js += "module.create = function(node) {";
    js += creationScript;
    js += "};";
    js += "initCompleteCallback(null, module);";
    js += importScript.tail;
    module = {};
    user = Appjangle.user;
    initCompleteCallback = function(ex, module) {
      module.create(node);
      return tempSession.commit().get(function() {
        var typeQry;
        typeQry = node.selectAll(tempSession.link(cnst.aType));
        typeQry.catchExceptions(callback);
        return typeQry.get(function(nodelist) {
          var head;
          head = "";
          head += "module.canEdit = 'function(node, callback) {";
          if (nodelist.size() === 0) {
            head += "  callback(null, true);";
            head += "}';";
            callback(null, {
              head: head,
              tail: ""
            });
          } else {
            head += priv.buildTest(nodelist);
            head += "}';";
            callback(null, {
              head: head,
              tail: ""
            });
          }
          return tempSession.close().get();
        });
      });
    };
    return eval(js);
  });
};

C.compile = function(module, callback) {
  return priv.prepareImports(module, function(ex, importCompilation) {
    return priv.getFactory(module, function(ex, creationScript) {
      return priv.getTypes(importCompilation, creationScript, callback);
    });
  });
};

C;
" 7.value.js:23
"eval //@ sourceURL=http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/30/n6/7.value.js
" 7.value.js:22
"var C, cnst;

C = {};

cnst = {};

cnst.modulePreferences = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/modulePreferences";

C.compile = function(module, callback) {
  var prefsQuery;
  prefsQuery = module.select(module.getSession().link(cnst.modulePreferences));
  prefsQuery.catchUndefined(function() {
    return callback(null, {
      head: "",
      tail: ""
    });
  });
  prefsQuery.catchExceptions(callback);
  return prefsQuery.get(function(prefs) {
    var head;
    head = "module.preferences = " + prefs.value() + ";";
    return callback(null, {
      head: head,
      tail: ""
    });
  });
};

C;
" 7.value.js:23
"eval //@ sourceURL=http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/30/n8/7.value.js
" 7.value.js:22
"var C, cnst;

C = {};

cnst = {};

cnst.label = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/label";

C.compile = function(module, callback) {
  var labelQuery;
  labelQuery = module.select(module.getSession().link(cnst.label));
  labelQuery.catchUndefined(function() {
    return callback(null, {
      head: "",
      tail: ""
    });
  });
  labelQuery.catchExceptions(callback);
  return labelQuery.get(function(label) {
    var head;
    head = 'module.label = "' + label.value().toString().replace(/\n/g, "\\n").replace(/\"/g, "\\\"") + '";';
    return callback(null, {
      head: head,
      tail: ""
    });
  });
};

C;
" 7.value.js:23
"eval //@ sourceURL=http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/30/n9/7.value.js
" 7.value.js:22
"var C, cnst;

C = {};

cnst = {};

cnst.moduleFactory = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/modulefactory";

cnst.icon = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/icon";

C.compile = function(module, callback) {
  var iconQuery, session;
  session = module.getSession();
  iconQuery = module.select(session.link(cnst.moduleFactory)).select(session.link(cnst.icon));
  iconQuery.catchUndefined(function() {
    return callback(null, {
      head: "",
      tail: ""
    });
  });
  iconQuery.catchExceptions(callback);
  return iconQuery.get(function(icon) {
    var head;
    head = 'module.icon = "' + icon.value() + '";';
    return callback(null, {
      head: head,
      tail: ""
    });
  });
};

C;
" 7.value.js:23
"eval //@ sourceURL=http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n1/7.value.js
" 7.value.js:22
"var C, cnst, priv;

C = {};

cnst = {};

cnst.mainStylesheet = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/stylesheet";

cnst.stylesheets = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/stylesheets";

cnst.stylesheet = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/CSSDocument";

priv = {};

priv.compileMainstylesheet = function(module) {
  return function(callback) {
    var mainStylesheetQuery;
    mainStylesheetQuery = module.select(module.getSession().link(cnst.mainStylesheet));
    mainStylesheetQuery.catchUndefined(function() {
      return callback(null, "");
    });
    mainStylesheetQuery.catchExceptions(callback);
    return mainStylesheetQuery.get(function(node) {
      return callback(null, node.value() + "\n");
    });
  };
};

priv.compileStylesheetsList = function(list, callback) {
  var node, ops, _fn, _i, _len, _ref;
  ops = [];
  _ref = list.nodes();
  _fn = function(node) {
    return ops.push(function(callback) {
      node.catchExceptions(callback);
      return node.get(function(node) {
        return callback(null, node.value());
      });
    });
  };
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    node = _ref[_i];
    _fn(node);
  }
  if (ops.length === 0) {
    callback(null, "");
    return;
  }
  return async.parallel(ops, function(err, res) {
    var allcss, css, _j, _len1;
    allcss = "";
    for (_j = 0, _len1 = res.length; _j < _len1; _j++) {
      css = res[_j];
      allcss += css + "\n";
    }
    return callback(null, allcss);
  });
};

priv.compileDependentStylesheets = function(module) {
  return function(callback) {
    var stylesheetsQuery;
    stylesheetsQuery = module.select(module.getSession().link(cnst.stylesheets));
    stylesheetsQuery.catchUndefined(function() {
      return callback(null, "");
    });
    stylesheetsQuery.catchExceptions(callback);
    return stylesheetsQuery.get(function(stylesheets) {
      var listQuery;
      listQuery = stylesheets.selectAll(cnst.stylesheet);
      listQuery.catchExceptions(callback);
      return listQuery.get(function(list) {
        return priv.compileStylesheetsList(list, callback);
      });
    });
  };
};

C.compile = function(module, callback) {
  return async.parallel([priv.compileMainstylesheet(module), priv.compileDependentStylesheets(module)], function(err, res) {
    var allcss, css, head, _i, _len;
    if (err) {
      callback(err);
      return;
    }
    allcss = "";
    for (_i = 0, _len = res.length; _i < _len; _i++) {
      css = res[_i];
      allcss += css;
    }
    head = "";
    head += "module.css = \"" + (head += allcss.replace(/\n/g, "\\n").replace(/\"/g, "\\\""));
    head += "\";";
    return callback(null, {
      head: head,
      tail: ""
    });
  });
};

C;
" 7.value.js:23
"eval //@ sourceURL=http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n4/7.value.js
" 7.value.js:22
"var C, cnst, priv;

C = {};

cnst = {};

cnst.utilsLib = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/module-utils-latest";

cnst.initScript = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/initscript";

priv = {};

priv.generateRequireStatement = function(libs, callback) {
  var head, library, tail, _i, _len;
  if (libs.length === 0) {
    callback(null, {
      head: "",
      tail: ""
    });
    return;
  }
  head = "Appjangle.require([";
  for (_i = 0, _len = libs.length; _i < _len; _i++) {
    library = libs[_i];
    head += "session.link(\"" + library.uri() + "\"), ";
  }
  head += "], function(ex, libs) {";
  head += "if (ex) { initCompleteCallback(ex); return; }";
  tail = "});";
  return callback(null, {
    head: head,
    tail: tail
  });
};

C.compile = function(module, callback) {
  return Appjangle.require(module.getSession().link(cnst.utilsLib), function(ex, ModuleUtils) {
    var librariesQuery;
    librariesQuery = module.select(module.getSession().link(cnst.initScript));
    librariesQuery.catchExceptions(callback);
    return librariesQuery.get(function(libNode) {
      var mu;
      mu = ModuleUtils.create();
      return mu.getDependentLibraries(libNode, function(ex, libs) {
        return priv.generateRequireStatement(libs, callback);
      });
    });
  });
};

C;
" 7.value.js:23
"eval //@ sourceURL=http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n5/7.value.js
" 7.value.js:22
"var C, cnst, priv;

C = {};

cnst = {};

cnst.xmlCollection = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/XmlCollections";

cnst.externalScriptList = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/externalScriptList";

priv = {};

priv.generateRequireStatement = function(ar, callback) {
  var head, library, tail, _i, _len;
  if (ar.length === 0) {
    callback(null, {
      head: "",
      tail: ""
    });
    return;
  }
  head = "Appjangle.requireExternal([";
  for (_i = 0, _len = ar.length; _i < _len; _i++) {
    library = ar[_i];
    head += "\"" + library + "\", ";
  }
  head += "], function(ex, libs) {";
  head += "if (ex) { initCompleteCallback(ex); return; }";
  tail = "});";
  return callback(null, {
    head: head,
    tail: tail
  });
};

C.compile = function(module, callback) {
  return Appjangle.require(module.getSession().link(cnst.xmlCollection), function(ex, XmlCollections) {
    var externalScriptsQuery;
    if (ex) {
      callback(ex);
      return;
    }
    externalScriptsQuery = module.select(module.getSession().link(cnst.externalScriptList));
    externalScriptsQuery.catchExceptions(callback);
    externalScriptsQuery.catchUndefined(function() {
      return callback(null, {
        head: "",
        tail: ""
      });
    });
    return externalScriptsQuery.get(function(externalScripts) {
      var ar;
      ar = XmlCollections.create().buildArrayFromValue(externalScripts.value());
      return priv.generateRequireStatement(ar, callback);
    });
  });
};

C;
" 7.value.js:23
"eval //@ sourceURL=http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/31/n6/7.value.js
" 7.value.js:22
"var C, cnst, priv;

C = {};

cnst = {};

cnst.xmlCollection = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/XmlCollections";

cnst.externalStylesheetList = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/externalStylesheetList";

priv = {};

priv.generateRequireStatement = function(ar, callback) {
  var head, library, tail, _i, _len;
  if (ar.length === 0) {
    callback(null, {
      head: "",
      tail: ""
    });
    return;
  }
  head = "Appjangle.requireExternalCss([";
  for (_i = 0, _len = ar.length; _i < _len; _i++) {
    library = ar[_i];
    head += "\"" + library + "\", ";
  }
  head += "], function(ex, libs) {";
  head += "if (ex) { initCompleteCallback(ex); return; }";
  tail = "});";
  return callback(null, {
    head: head,
    tail: tail
  });
};

C.compile = function(module, callback) {
  return Appjangle.require(module.getSession().link(cnst.xmlCollection), function(ex, XmlCollections) {
    var externalStylesheetQuery;
    if (ex) {
      callback(ex);
      return;
    }
    externalStylesheetQuery = module.select(module.getSession().node(cnst.externalStylesheetList));
    externalStylesheetQuery.catchExceptions(callback);
    externalStylesheetQuery.catchUndefined(function() {
      return callback(null, {
        head: "",
        tail: ""
      });
    });
    return externalStylesheetQuery.get(function(externalStylesheet) {
      var ar;
      ar = XmlCollections.create().buildArrayFromValue(externalStylesheet.value());
      return priv.generateRequireStatement(ar, callback);
    });
  });
};

C;
" 7.value.js:23
Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead 7.value.js:1
"eval //@ sourceURL=http://slicnet.com/mxrogm/mxrogm/data/stream/2014/1/28/n3/7.value.js
" 7.value.js:22
"var C, priv;

C = {};

priv = {};

priv.applyCompile = function(module) {
  return function(item, callback) {
    var e;
    try {
      return item(module, function(ex, js) {
        return callback(ex, js);
      });
    } catch (_error) {
      e = _error;
      return callback({
        exception: "Failed on compiling item " + e
      });
    }
  };
};

C.compile = function(module, compilers, callback) {
  var res;
  res = "";
  return async.map(compilers, priv.applyCompile(module), function(ex, compilations) {
    var compilation, i, joined_head, joined_tail, _i, _j, _len, _ref;
    if (ex) {
      callback(ex);
      return;
    }
    joined_head = "";
    joined_tail = "";
    for (_i = 0, _len = compilations.length; _i < _len; _i++) {
      compilation = compilations[_i];
      joined_head += compilation.head;
    }
    for (i = _j = _ref = compilations.length - 1; _j >= 0; i = _j += -1) {
      joined_tail += compilations[i].tail;
    }
    return callback(null, "//Appjangle.Module\n" + "var init;" + "init = function(callback) {" + "  var ml = {};" + "  ml.init = function(" + "     module, session, user, initCompleteCallback) {" + joined_head + "initCompleteCallback(null, module);" + joined_tail + "  };" + "  callback(null, ml);" + "};");
  });
};

C;
" 7.value.js:23
Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead 7.value.js:1
"eval //@ sourceURL=https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/module-utils-latest.value.js
" 7.value.js:22
"var init;

init = function(callback) {
    
    window.Appjangle = window.Appjangle || {};
    
    (function(Appjangle, $) {
        
        Appjangle.ModuleUtils = Appjangle.ModuleUtils || {};
        
        Appjangle.ModuleUtils.create = function() {
            
            var c = {};
            c.moduleHelp = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/help";
            c.initScript = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/initscript";
            c.factory = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/modulefactory";
            c.creationScript = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/creationscript";
            c.label = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/label";
            c.mainStylesheet = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/stylesheet";
            c.uitemplate = "https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/uitemplate";
            c.preferences = "https://u1.linnk.it/qc8sbw/usr"[…] 7.value.js:23
Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead 7.value.js:1
"eval //@ sourceURL=https://u1.linnk.it/qc8sbw/usr/apps/textsync/upload/XmlCollections.value.js
" 7.value.js:22
"

var init;

init = function(callback) {

	window.Appjangle = window.Appjangle || {};

	(function(Appjangle, $) {

		Appjangle.XmlCollections = Appjangle.XmlCollections || {};

		Appjangle.XmlCollections.create = function() {

			var utils = {};

			utils.encodeXml = function(input) {
				return input.replace(/&/g, '&amp;').replace(/</g, '&lt;')
						.replace(/>/g, '&gt;').replace(/"/g, '&quot;');
			};

			utils.decodeXml = function(input) {
				return input.replace(/&quot;/g, '"').replace(/&gt;/g, '>')
						.replace(/&lt;/g, '<').replace(/&amp;/g, '&');
			};

			utils.buildValueFromArray = function(librariesArray) {
				var res = "";
				for (var i = 0; i < librariesArray.length; i++) {
					res = res + "<item>" + utils.encodeXml(librariesArray[i])
							+ "</item>";
				}
				return res;
			};

			utils.buildArrayFromValue = function(value) {
				var r = [];
				var i = 0;

				while (i < value.length) {

					var start = value.indexOf("<item>", i) + "<item>".length;
					if (start === -1) {
						return r;
					}

					var end = value.indexOf("</item>", i);
					if (end === -1) {
						return r;
					}

					r.push(utils.decodeXml(value.substring(start, end)));

					i = end;
					i++;
				}

				return r;

			};

			return utils;

		};
		
		callback(null, Appjangle.XmlCollections);
	}(window.Appjangle, window.jQuery));
};
"