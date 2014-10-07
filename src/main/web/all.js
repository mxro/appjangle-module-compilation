apply

function (module, callback) {
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
} 7.value.js:12
applyfunction (module, callback) {
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
} 7.value.js:12
applyfunction (module, callback) {
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
} 7.value.js:12
applyfunction (module, callback) {
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
} 7.value.js:12
applyfunction (module, callback) {
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
} 7.value.js:12
applyfunction (module, callback) {
  return priv.prepareImports(module, function(ex, importCompilation) {
    return priv.getFactory(module, function(ex, creationScript) {
      return priv.getTypes(importCompilation, creationScript, callback);
    });
  });
} 7.value.js:12
applyfunction (module, callback) {
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
} 7.value.js:12
applyfunction (module, callback) {
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
} 7.value.js:12
applyfunction (module, callback) {
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
} 7.value.js:12
applyfunction (module, callback) {
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
} 7.value.js:12
applyfunction (module, callback) {
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
} 7.value.js:12
applyfunction (module, callback) {
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
} 7.value.js:12
applyfunction (module, callback) {
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
} 